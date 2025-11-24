const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, 'data', 'data.json');
const UPLOAD_DIR = path.join(__dirname, 'data', 'uploads');
const app = express();

// Simple credentials (override with env vars ADMIN_USER, ADMIN_PASS)
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'admin';
// JWT secret and options
const JWT_SECRET = process.env.JWT_SECRET || 'dev-jwt-secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '60mb' }));

// Serve static files (the admin HTML/CSS/JS and site files)
app.use(express.static(path.join(__dirname)));

// Do not serve uploads via static - protect behind auth endpoint below

// multer storage
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try{ await fs.mkdir(UPLOAD_DIR, { recursive: true }); cb(null, UPLOAD_DIR); }catch(e){ cb(e); }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '';
    const name = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,6) + ext;
    cb(null, name);
  }
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB default limit

// Authentication middleware: accepts either Basic (for CLI/tools) or Bearer JWT
function authMiddleware(req, res, next){
  const auth = req.headers['authorization'];
  if(!auth) { res.setHeader('WWW-Authenticate', 'Basic realm="Admin"'); return res.status(401).json({ error: 'Unauthorized' }); }
  if(auth.startsWith('Basic ')){
    const b = auth.slice('Basic '.length);
    const creds = Buffer.from(b, 'base64').toString('utf8');
    const idx = creds.indexOf(':'); if(idx < 0) return res.status(401).json({ error: 'Unauthorized' });
    const user = creds.slice(0, idx); const pass = creds.slice(idx+1);
    if(user === ADMIN_USER && pass === ADMIN_PASS) return next();
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if(auth.startsWith('Bearer ')){
    const token = auth.slice('Bearer '.length);
    try{
      const payload = jwt.verify(token, JWT_SECRET);
      req.user = payload; return next();
    }catch(e){ return res.status(401).json({ error: 'Invalid token' }); }
  }
  return res.status(401).json({ error: 'Unauthorized' });
}

async function ensureDataFile(){
  try{
    await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });
    await fs.access(DATA_PATH);
  }catch(e){
    const defaultData = { services: [], wallets: [], orders: [], transactions: [] };
    await fs.writeFile(DATA_PATH, JSON.stringify(defaultData, null, 2), 'utf8');
  }
}

// GET full data
app.get('/api/data', authMiddleware, async (req, res) => {
  try{
    await ensureDataFile();
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    res.type('application/json').send(raw);
  }catch(err){
    console.error('GET /api/data error', err);
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// Replace full data (protected)
app.post('/api/data', authMiddleware, async (req, res) => {
  try{
    const body = req.body;
    if(!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid payload' });
    const out = {
      services: Array.isArray(body.services) ? body.services : [],
      wallets: Array.isArray(body.wallets) ? body.wallets : [],
      orders: Array.isArray(body.orders) ? body.orders : [],
      transactions: Array.isArray(body.transactions) ? body.transactions : []
    };
    await ensureDataFile();
    await fs.writeFile(DATA_PATH, JSON.stringify(out, null, 2), 'utf8');
    res.json({ ok: true });
  }catch(err){
    console.error('POST /api/data error', err);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// Login endpoint: returns a simple bearer token (base64 user:pass). Not production secure.
// auth endpoint returns a signed JWT
app.post('/api/auth', async (req, res) => {
  try{
    const { user, pass } = req.body || {};
    if(!user || !pass) return res.status(400).json({ error: 'Missing credentials' });
    if(user === ADMIN_USER && pass === ADMIN_PASS){
      const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
      return res.json({ ok: true, token });
    }
    return res.status(401).json({ error: 'Invalid credentials' });
  }catch(err){
    console.error('POST /api/auth error', err);
    res.status(500).json({ error: 'Auth failed' });
  }
});

// Delete uploaded file (protected)
app.post('/api/delete-file', authMiddleware, async (req, res) => {
  try{
    const body = req.body || {};
    const rel = body.path;
    if(!rel || typeof rel !== 'string') return res.status(400).json({ error: 'Invalid path' });
    // Accept either admin path (/data/uploads/...) or public path (/public/uploads/...)
    let filename = null;
    if(rel.startsWith('/data/uploads/')) filename = path.basename(rel);
    else if(rel.startsWith('/public/uploads/')) filename = path.basename(rel);
    else return res.status(400).json({ error: 'Invalid path' });
    const abs = path.join(UPLOAD_DIR, filename);
    const normalized = path.normalize(abs);
    if(!normalized.startsWith(UPLOAD_DIR)) return res.status(400).json({ error: 'Path outside upload dir' });
    try{ await fs.unlink(normalized); }catch(e){ if(e.code !== 'ENOENT') throw e; }
    return res.json({ ok: true });
  }catch(err){
    console.error('POST /api/delete-file error', err);
    res.status(500).json({ error: 'Delete failed' });
  }
});

// Export data as downloadable file (protected)
app.get('/api/export', authMiddleware, async (req, res) => {
  try{
    await ensureDataFile();
    res.download(DATA_PATH, 'admin-data.json');
  }catch(err){
    console.error('GET /api/export error', err);
    res.status(500).json({ error: 'Export failed' });
  }
});

// Import data by replacing the data file (protected)
app.post('/api/import', authMiddleware, async (req, res) => {
  try{
    const body = req.body;
    if(!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid payload' });
    await ensureDataFile();
    await fs.writeFile(DATA_PATH, JSON.stringify(body, null, 2), 'utf8');
    return res.json({ ok: true });
  }catch(err){
    console.error('POST /api/import error', err);
    res.status(500).json({ error: 'Import failed' });
  }
});

// Upload endpoint (protected)
app.post('/api/upload', authMiddleware, upload.single('file'), async (req, res) => {
  try{
    if(!req.file) return res.status(400).json({ error: 'No file' });
    const rel = `/data/uploads/${req.file.filename}`;
    const publicRel = `/public/uploads/${req.file.filename}`;
    res.json({ ok: true, url: rel, publicUrl: publicRel });
  }catch(err){
    console.error('POST /api/upload error', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Serve uploaded files publicly (no auth) at /public/uploads/:file
app.get('/public/uploads/:file', async (req, res) => {
  try{
    const fn = req.params.file;
    const abs = path.join(UPLOAD_DIR, fn);
    const normalized = path.normalize(abs);
    if(!normalized.startsWith(UPLOAD_DIR)) return res.status(400).end('Bad path');
    res.sendFile(normalized);
  }catch(err){ console.error('GET public upload error', err); res.status(404).end('Not found'); }
});

// Incremental sync endpoint: merge incoming items by id and _modified
app.post('/api/sync', authMiddleware, async (req, res) => {
  try{
    const incoming = req.body || {};
    await ensureDataFile();
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    const current = JSON.parse(raw);

    const types = ['services','wallets','orders','transactions'];
    types.forEach(type => {
      const arr = Array.isArray(incoming[type]) ? incoming[type] : [];
      arr.forEach(item => {
        if(!item.id){ item.id = Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
        if(!item._modified) item._modified = Date.now();
        const idx = current[type].findIndex(x=>x.id===item.id);
        if(idx === -1){ current[type].push(item); }
        else {
          const existing = current[type][idx];
          const em = existing._modified || 0;
          if(item._modified >= em){ current[type][idx] = item; }
        }
      });
    });

    await fs.writeFile(DATA_PATH, JSON.stringify(current, null, 2), 'utf8');
    res.json({ ok: true, updated: true });
  }catch(err){
    console.error('POST /api/sync error', err);
    res.status(500).json({ error: 'Sync failed' });
  }
});

// Get changes since timestamp (ms)
app.get('/api/changes', authMiddleware, async (req, res) => {
  try{
    const since = parseInt(req.query.since || '0', 10) || 0;
    await ensureDataFile();
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    const current = JSON.parse(raw);
    const out = {};
    ['services','wallets','orders','transactions'].forEach(type => {
      out[type] = (current[type] || []).filter(i => (i._modified||0) > since);
    });
    res.json(out);
  }catch(err){
    console.error('GET /api/changes error', err);
    res.status(500).json({ error: 'Failed to get changes' });
  }
});

// Public wallets endpoint — returns only wallets marked as public (or missing the public flag)
app.get('/public/wallets', async (req, res) => {
  try{
    await ensureDataFile();
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    const current = JSON.parse(raw);
    const wallets = (current.wallets || []).filter(w => (w.public !== false));
    // sanitize/limit fields returned to buyers
    const out = wallets.map(w => ({
      id: w.id,
      label: w.label,
      address: w.address,
      currency: w.currency || null,
      qrPublicUrl: w.qrPublicUrl || null,
      qrUrl: w.qrUrl || null,
      qrData: w.qrData || null,
      isPrimary: !!w.isPrimary
    }));
    res.json(out);
  }catch(err){
    console.error('GET /public/wallets error', err);
    res.status(500).json({ error: 'Failed to read public wallets' });
  }
});

// Serve uploaded files only after auth via this route
app.get('/data/uploads/:file', authMiddleware, async (req, res) => {
  try{
    const fn = req.params.file;
    const abs = path.join(UPLOAD_DIR, fn);
    const normalized = path.normalize(abs);
    if(!normalized.startsWith(UPLOAD_DIR)) return res.status(400).end('Bad path');
    res.sendFile(normalized);
  }catch(err){ console.error('GET upload error', err); res.status(404).end('Not found'); }
});

// orphan cleanup: remove files in UPLOAD_DIR not referenced in data.json
async function cleanupOrphanFiles(){
  try{
    await ensureDataFile();
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    const data = JSON.parse(raw);
    const referenced = new Set();
    (data.wallets||[]).forEach(w => { if(w.qrUrl && String(w.qrUrl).startsWith('/data/uploads/')) referenced.add(path.basename(w.qrUrl)); });
    const files = await fs.readdir(UPLOAD_DIR).catch(()=>[]);
    for(const f of files){ if(!referenced.has(f)){ const p = path.join(UPLOAD_DIR, f); await fs.unlink(p).catch(()=>{}); console.log('Removed orphan file', f); } }
  }catch(err){ console.error('cleanupOrphanFiles error', err); }
}

// start server (HTTP or HTTPS if certs provided)
async function startServer(){
  try{
    await ensureDataFile();
    // run initial cleanup
    await cleanupOrphanFiles();
    // schedule cleanup every hour
    setInterval(cleanupOrphanFiles, 1000 * 60 * 60);

    const keyPath = process.env.SSL_KEY_PATH || path.join(__dirname, 'cert', 'key.pem');
    const certPath = process.env.SSL_CERT_PATH || path.join(__dirname, 'cert', 'cert.pem');
    const useHttps = await fs.access(keyPath).then(()=>fs.access(certPath).then(()=>true).catch(()=>false)).catch(()=>false);
    if(useHttps){
      const https = require('https');
      const key = await fs.readFile(keyPath);
      const cert = await fs.readFile(certPath);
      https.createServer({ key, cert }, app).listen(PORT, ()=>{
        console.log(`HTTPS server started on https://localhost:${PORT}`);
      });
    } else {
      app.listen(PORT, () => { console.log(`HTTP server started on http://localhost:${PORT}`); });
      console.warn('SSL certs not found - running over HTTP. To enable HTTPS provide SSL_KEY_PATH and SSL_CERT_PATH env vars or place certs in ./cert');
    }
  }catch(err){ console.error('startServer error', err); process.exit(1); }
}

startServer();
