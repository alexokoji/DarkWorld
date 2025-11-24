// Admin dashboard - client-side storage (localStorage)
(() => {
  const STORAGE_KEY = 'adminData-v1';

  const qs = s => document.querySelector(s);
  const qsa = s => Array.from(document.querySelectorAll(s));

  // default structure
  const defaultData = { services: [], wallets: [], orders: [], transactions: [] };

  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }

  // local-only load (fallback)
  function loadDataFromLocal(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(defaultData));
    }catch(e){
      console.error('Failed to load data from localStorage', e);
      return JSON.parse(JSON.stringify(defaultData));
    }
  }

  // show small status toast
  function showStatus(msg, ok = true){
    try{
      let el = document.querySelector('#admin-sync-status');
      if(!el){ el = document.createElement('div'); el.id='admin-sync-status'; el.style.position='fixed'; el.style.right='12px'; el.style.bottom='12px'; el.style.padding='8px 12px'; el.style.borderRadius='8px'; el.style.zIndex=9999; el.style.boxShadow='0 6px 18px rgba(0,0,0,0.6)'; document.body.appendChild(el); }
      el.textContent = msg; el.style.background = ok ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)'; el.style.color = ok ? '#10b981' : '#ef4444';
      clearTimeout(el._t);
      el._t = setTimeout(()=>{ el.remove(); }, 3500);
    }catch(e){ console.log(msg); }
  }

  // state starts empty until init runs
  let state = JSON.parse(JSON.stringify(defaultData));

  // Try to fetch data from server; if it fails, use localStorage fallback
  async function loadDataFromServer(){
    try{
      const res = await authFetch('/api/data', { cache: 'no-store' });
      if(!res || !res.ok) throw new Error('Non-OK response');
      const parsed = await res.json();
      // merge with defaults to ensure arrays exist
      return Object.assign({}, defaultData, parsed);
    }catch(err){
      console.warn('Failed to load from server, falling back to localStorage', err);
      return null;
    }
  }

  // Save to server (POST). Returns true on server success, false otherwise.
  // Auth helpers (Basic auth stored in sessionStorage as base64 user:pass)
  function getAuthHeader(){
    const token = sessionStorage.getItem('adminToken');
    return token ? { 'Authorization': 'Bearer ' + token } : {};
  }

  async function authFetch(url, options = {}){
    options.headers = Object.assign({}, options.headers || {}, getAuthHeader());
    try{
      const res = await fetch(url, options);
      if(res.status === 401){ showStatus('Authentication required — please log in', false); window.location.href = '/login.html'; }
      return res;
    }catch(err){ console.warn('authFetch error', err); return null; }
  }

  // Incremental save: send only items modified since last sync
  function getLastSync(){ return parseInt(localStorage.getItem('adminLastSync')||'0',10) || 0; }
  function setLastSync(v){ localStorage.setItem('adminLastSync', String(v)); }

  async function saveDataToServer(/*payload not used for incremental sync*/){
    try{
      const last = getLastSync();
      const changed = { services: [], wallets: [], orders: [], transactions: [] };
      ['services','wallets','orders','transactions'].forEach(type => {
        (state[type]||[]).forEach(i => { if((i._modified||0) > last) changed[type].push(i); });
      });
      // If nothing changed, still return true
      if(!changed.services.length && !changed.wallets.length && !changed.orders.length && !changed.transactions.length) return true;
      const res = await authFetch('/api/sync', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(changed) });
      if(!res || !res.ok) throw new Error('Sync failed');
      setLastSync(Date.now());
      return true;
    }catch(err){
      console.warn('Failed to save to server (sync)', err);
      return false;
    }
  }

  // Unified saveData: write to localStorage immediately, then attempt server sync in background
  async function saveData(){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }catch(e){ console.error('Failed to write to localStorage', e); }
    renderAll();
    // attempt server sync
    const ok = await saveDataToServer(state);
    if(ok) showStatus('Synced to server', true);
    else showStatus('Saved locally (server unavailable)', false);
    return ok;
  }

  /* ---------- Rendering ---------- */
  function renderAll(){
    renderServices(); renderWallets(); renderOrders(); renderTxs(); populateSelects();
  }

  function renderServices(){
    const tbody = qs('#services-table tbody'); tbody.innerHTML='';
    state.services.forEach(s => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${escapeHtml(s.name)}</td><td>${s.price}</td><td>${escapeHtml(s.desc||'')}</td>
        <td>
          <button class="action-btn btn-edit" data-id="${s.id}" data-type="service-edit">Edit</button>
          <button class="action-btn btn-del" data-id="${s.id}" data-type="service-del">Delete</button>
        </td>`;
      tbody.appendChild(tr);
    })
  }

  function renderWallets(){
    const tbody = qs('#wallets-table tbody'); tbody.innerHTML='';
    state.wallets.forEach(w => {
      const tr = document.createElement('tr');
  const imgSrc = w.qrPublicUrl ? w.qrPublicUrl : (w.qrUrl ? w.qrUrl : (w.qrData ? w.qrData : ''));
      const img = imgSrc ? `<img class="qr-thumb" src="${imgSrc}" alt="qr">` : '';
      const visible = (w.public === false) ? '<span class="badge hidden">hidden</span>' : '<span class="badge">visible</span>';
      const primary = w.isPrimary ? '<span class="badge primary">primary</span>' : '';
      tr.innerHTML = `<td>${escapeHtml(w.label)}</td><td>${escapeHtml(w.currency||'')}</td><td><code style="color:var(--muted)">${escapeHtml(w.address)}</code></td>
        <td>${visible}</td>
        <td>${primary}</td>
        <td>${img}</td>
        <td>
          <button class="action-btn btn-edit" data-id="${w.id}" data-type="wallet-edit">Edit</button>
          <button class="action-btn btn-del" data-id="${w.id}" data-type="wallet-del">Delete</button>
          <button class="action-btn" data-id="${w.id}" data-type="wallet-primary">Set primary</button>
          ${imgSrc && imgSrc.startsWith('/data/uploads')? `<a class="action-btn" href="${imgSrc}" download="${w.label||'qr'}.png">Download QR</a>`: ''}
        </td>`;
      tbody.appendChild(tr);
    });
  }

  function renderOrders(){
    const tbody = qs('#orders-table tbody'); tbody.innerHTML='';
    state.orders.forEach(o => {
      const svc = state.services.find(s=>s.id===o.serviceId);
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${svc?escapeHtml(svc.name):'(service removed)'}</td><td>${escapeHtml(o.buyer||'')}</td>
        <td>${o.amount}</td><td>${escapeHtml(o.status||'')}</td><td>${new Date(o.date).toLocaleString()}</td>
        <td><button class="action-btn btn-edit" data-id="${o.id}" data-type="order-edit">Edit</button>
        <button class="action-btn btn-del" data-id="${o.id}" data-type="order-del">Delete</button></td>`;
      tbody.appendChild(tr);
    })
  }

  function renderTxs(){
    const tbody = qs('#tx-table tbody'); tbody.innerHTML='';
    state.transactions.forEach(t => {
      const w = state.wallets.find(w=>w.id===t.walletId);
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${escapeHtml(t.type)}</td><td>${t.amount}</td><td>${w?escapeHtml(w.label):'(wallet removed)'}</td>
        <td>${escapeHtml(t.note||'')}</td><td>${new Date(t.date).toLocaleString()}</td>
        <td><button class="action-btn btn-edit" data-id="${t.id}" data-type="tx-edit">Edit</button>
        <button class="action-btn btn-del" data-id="${t.id}" data-type="tx-del">Delete</button></td>`;
      tbody.appendChild(tr);
    })
  }

  function populateSelects(){
    const svcSel = qs('#order-service'); svcSel.innerHTML='';
    state.services.forEach(s=>{ const opt=document.createElement('option'); opt.value=s.id; opt.textContent=`${s.name} (${s.price})`; svcSel.appendChild(opt);});
    const walletSel = qs('#tx-wallet'); walletSel.innerHTML='';
    state.wallets.forEach(w=>{ const opt=document.createElement('option'); opt.value=w.id; const txt = w.currency ? `${w.label} (${w.currency}) — ${w.address}` : `${w.label} — ${w.address}`; opt.textContent = txt; walletSel.appendChild(opt);});
  }

  /* ---------- Helpers ---------- */
  function escapeHtml(s){ if(!s) return ''; return String(s).replace(/[&<>\"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]); }

  /* ---------- Form handling ---------- */
  // Services
  qs('#service-form').addEventListener('submit', e=>{
    e.preventDefault();
    const id = qs('#service-id').value;
    const name = qs('#service-name').value.trim();
    const price = parseFloat(qs('#service-price').value)||0;
    const desc = qs('#service-desc').value.trim();
    if(!name) return alert('Service name required');
    if(id){ // update
      const s = state.services.find(x=>x.id===id); if(!s) return;
      s.name=name; s.price=price; s.desc=desc; s._modified = Date.now();
    } else {
      state.services.push({id:uid(), name, price, desc, _modified: Date.now()});
    }
    qs('#service-form').reset(); qs('#service-id').value=''; saveData();
  })
  qs('#service-cancel').addEventListener('click', ()=>{ qs('#service-form').reset(); qs('#service-id').value=''; })

  // Wallets (QR upload)
  let walletPendingQr = null;
  let walletPendingPublic = null;
  qs('#wallet-qr').addEventListener('change', async e=>{
    const f = e.target.files && e.target.files[0];
    if(!f) { walletPendingQr=null; return; }
    // try uploading to server; fall back to data URL
    try{
  const form = new FormData(); form.append('file', f);
  const res = await authFetch('/api/upload', { method: 'POST', body: form });
  if(res && res.ok){ const js = await res.json(); walletPendingQr = js.url || null; walletPendingPublic = js.publicUrl || null; showStatus('Uploaded QR to server', true); }
      else {
        const r = new FileReader(); r.onload = ev => { walletPendingQr = ev.target.result; showStatus('Stored QR as data URL (upload failed)', false); }; r.readAsDataURL(f);
      }
    }catch(err){ const r = new FileReader(); r.onload = ev => { walletPendingQr = ev.target.result; showStatus('Stored QR as data URL (upload error)', false); }; r.readAsDataURL(f); }
  })
  qs('#wallet-form').addEventListener('submit', e=>{
    e.preventDefault();
    const id = qs('#wallet-id').value;
    const label = qs('#wallet-label').value.trim();
    const address = qs('#wallet-address').value.trim();
    const currency = qs('#wallet-currency') ? qs('#wallet-currency').value.trim() : '';
    const pub = !!qs('#wallet-public') && !!qs('#wallet-public').checked;
    const primary = !!qs('#wallet-primary') && !!qs('#wallet-primary').checked;
    if(!label || !address) return alert('Label and address required');
      if(id){
      const w = state.wallets.find(x=>x.id===id); if(!w) return;
      w.label = label; w.address = address; w.public = pub;
      w.currency = currency || (w.currency || null);
      if(primary){ state.wallets.forEach(x=>x.isPrimary = false); w.isPrimary = true; }
      if(walletPendingQr){ if(String(walletPendingQr).startsWith('/data/')) w.qrUrl = walletPendingQr; else w.qrData = walletPendingQr; }
      if(walletPendingPublic){ w.qrPublicUrl = walletPendingPublic; }
      w._modified = Date.now();
    } else {
      if(primary) state.wallets.forEach(x=>x.isPrimary = false);
      const newW = { id: uid(), label, address, currency: currency || null, public: pub, isPrimary: !!primary, _modified: Date.now() };
      if(walletPendingQr){ if(String(walletPendingQr).startsWith('/data/')) newW.qrUrl = walletPendingQr; else newW.qrData = walletPendingQr; }
      if(walletPendingPublic){ newW.qrPublicUrl = walletPendingPublic; }
      state.wallets.push(newW);
    }
    walletPendingQr = null; qs('#wallet-form').reset(); qs('#wallet-id').value = ''; if(qs('#wallet-currency')) qs('#wallet-currency').value = ''; saveData();
  })
  qs('#wallet-cancel').addEventListener('click', ()=>{ qs('#wallet-form').reset(); qs('#wallet-id').value=''; walletPendingQr=null; })

  // Orders
  qs('#order-form').addEventListener('submit', e=>{
    e.preventDefault(); const id=qs('#order-id').value; const serviceId=qs('#order-service').value; const buyer=qs('#order-buyer').value; const amount=parseFloat(qs('#order-amount').value)||0; const status=qs('#order-status').value;
    if(!serviceId) return alert('Select service');
    if(id){ const o=state.orders.find(x=>x.id===id); if(!o) return; o.serviceId=serviceId; o.buyer=buyer; o.amount=amount; o.status=status; o._modified = Date.now(); }
    else state.orders.push({id:uid(), serviceId, buyer, amount, status, date: new Date().toISOString(), _modified: Date.now()});
    qs('#order-form').reset(); qs('#order-id').value=''; saveData();
  })
  qs('#order-cancel').addEventListener('click', ()=>{ qs('#order-form').reset(); qs('#order-id').value=''; })

  // Transactions
  qs('#tx-form').addEventListener('submit', e=>{
    e.preventDefault(); const id=qs('#tx-id').value; const type=qs('#tx-type').value; const amount=parseFloat(qs('#tx-amount').value)||0; const walletId=qs('#tx-wallet').value; const note=qs('#tx-note').value;
    if(!walletId) return alert('Select wallet');
    if(id){ const t=state.transactions.find(x=>x.id===id); if(!t) return; t.type=type; t.amount=amount; t.walletId=walletId; t.note=note; t._modified = Date.now(); }
    else state.transactions.push({id:uid(), type, amount, walletId, note, date: new Date().toISOString(), _modified: Date.now()});
    qs('#tx-form').reset(); qs('#tx-id').value=''; saveData();
  })
  qs('#tx-cancel').addEventListener('click', ()=>{ qs('#tx-form').reset(); qs('#tx-id').value=''; })

  /* ---------- Table-level actions (edit/delete) ---------- */
  document.addEventListener('click', e=>{
    const t = e.target; const type = t.dataset && t.dataset.type; if(!type) return;
    const id = t.dataset.id;
    if(type.endsWith('-edit')) handleEdit(type.split('-')[0], id);
    if(type.endsWith('-del')) handleDelete(type.split('-')[0], id);
    if(type.endsWith('-primary')) handlePrimary(type.split('-')[0], id);
  })

  function handlePrimary(kind, id){
    if(kind !== 'wallet') return;
    const w = state.wallets.find(x=>x.id===id); if(!w) return;
    const newState = !w.isPrimary;
    state.wallets.forEach(x=>x.isPrimary = false);
    if(newState) w.isPrimary = true;
    w._modified = Date.now();
    saveData();
  }

  function handleEdit(kind, id){
    if(kind==='service'){ const s=state.services.find(x=>x.id===id); if(!s) return; qs('#service-id').value=s.id; qs('#service-name').value=s.name; qs('#service-price').value=s.price; qs('#service-desc').value=s.desc||''; }
  if(kind==='wallet'){ const w=state.wallets.find(x=>x.id===id); if(!w) return; qs('#wallet-id').value=w.id; qs('#wallet-label').value=w.label; qs('#wallet-address').value=w.address; walletPendingQr = w.qrUrl || w.qrData || null; walletPendingPublic = w.qrPublicUrl || null; if(qs('#wallet-public')) qs('#wallet-public').checked = (w.public !== false); if(qs('#wallet-primary')) qs('#wallet-primary').checked = !!w.isPrimary; if(qs('#wallet-currency')) qs('#wallet-currency').value = w.currency || ''; }
    if(kind==='order'){ const o=state.orders.find(x=>x.id===id); if(!o) return; qs('#order-id').value=o.id; qs('#order-service').value=o.serviceId; qs('#order-buyer').value=o.buyer||''; qs('#order-amount').value=o.amount||''; qs('#order-status').value=o.status||'pending'; }
    if(kind==='tx'){ const t=state.transactions.find(x=>x.id===id); if(!t) return; qs('#tx-id').value=t.id; qs('#tx-type').value=t.type; qs('#tx-amount').value=t.amount; qs('#tx-wallet').value=t.walletId; qs('#tx-note').value=t.note||''; }
  }

  function handleDelete(kind, id){
    if(!confirm('Delete this item?')) return;
    if(kind==='service'){ state.services = state.services.filter(x=>x.id!==id); // also orphaned orders
      state.orders = state.orders.filter(o=>o.serviceId!==id);
    }
    if(kind==='wallet'){
      // attempt server-side deletion of uploaded QR file if present
      const w = state.wallets.find(x=>x.id===id);
      if(w && w.qrUrl && String(w.qrUrl).startsWith('/data/uploads')){
        try{ authFetch('/api/delete-file', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ path: w.qrUrl }) }); }catch(e){}
      }
      state.wallets = state.wallets.filter(x=>x.id!==id);
      state.transactions = state.transactions.filter(t=>t.walletId!==id);
    }
    if(kind==='order'){ state.orders = state.orders.filter(x=>x.id!==id); }
    if(kind==='tx'){ state.transactions = state.transactions.filter(x=>x.id!==id); }
    saveData();
  }

  /* ---------- Import/Export ---------- */
  qs('#export-btn').addEventListener('click', ()=>{
    const blob = new Blob([JSON.stringify(state, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='admin-data.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  })

  qs('#import-file').addEventListener('change', e=>{
    const f = e.target.files && e.target.files[0]; if(!f) return;
    const r = new FileReader(); r.onload = ev => {
      try{
        const parsed = JSON.parse(ev.target.result);
        // basic validation
        if(typeof parsed !== 'object') throw new Error('Invalid JSON');
        state = Object.assign({}, defaultData, parsed);
        // mark everything as modified so server sync will pick up
        ['services','wallets','orders','transactions'].forEach(type=>{
          (state[type]||[]).forEach(i=> { i._modified = Date.now(); });
        });
        saveData(); alert('Import successful');
      }catch(err){ alert('Import failed: ' + err.message); }
    };
    r.readAsText(f);
    e.target.value='';
  })

  /* ---------- Navigation shortcuts ---------- */
  // navigation buttons (sidebar)
  qsa('.sidebar button').forEach(b=>b.addEventListener('click', ()=>{
    // mark active
    qsa('.sidebar button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const t=document.querySelector(b.dataset.target); if(t) t.scrollIntoView({behavior:'smooth'});
  }));

  // initial load: try server, otherwise fall back to localStorage
  (async function init(){
    const serverData = await loadDataFromServer();
    if(serverData){
      state = serverData;
      try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
      try{ setLastSync(Date.now()); }catch(e){}
      showStatus('Loaded data from server', true);
    } else {
      state = loadDataFromLocal();
      showStatus('Loaded data from localStorage', false);
    }
    renderAll();
  // update logout UI and login link visibility
  const logoutBtn = qs('#logout-btn'); const status = qs('#login-status'); const loginLink = qs('#login-link');
  const loggedIn = !!sessionStorage.getItem('adminToken');
  if(logoutBtn){ logoutBtn.style.display = loggedIn ? 'inline-block' : 'none'; logoutBtn.addEventListener('click', ()=>{ sessionStorage.removeItem('adminToken'); sessionStorage.removeItem('adminUser'); logoutBtn.style.display='none'; status.textContent=''; if(loginLink) loginLink.style.display = 'inline-block'; showStatus('Logged out', true); }); }
  if(loginLink) loginLink.style.display = loggedIn ? 'none' : 'inline-block';
  status.textContent = sessionStorage.getItem('adminUser') ? `Logged in as ${sessionStorage.getItem('adminUser')}` : '';
  })();

  // expose for debugging in console
  window.adminState = {get: ()=>state, save: saveData, loadFromServer: loadDataFromServer};

  // --- Auth UI wiring ---
  function setupAuthUI(){
    const form = qs('#login-form'); if(!form) return;
    const userIn = qs('#login-user'); const passIn = qs('#login-pass'); const logoutBtn = qs('#logout-btn'); const status = qs('#login-status');
    function update(){ const token = sessionStorage.getItem('adminToken'); const user = sessionStorage.getItem('adminUser'); if(token){ userIn.style.display='none'; passIn.style.display='none'; qs('#login-btn').style.display='none'; logoutBtn.style.display='inline-block'; status.textContent = user ? `Logged in as ${user}` : 'Logged in'; } else { userIn.style.display='inline-block'; passIn.style.display='inline-block'; qs('#login-btn').style.display='inline-block'; logoutBtn.style.display='none'; status.textContent=''; } }
    form.addEventListener('submit', async e=>{ e.preventDefault(); const user = userIn.value || ''; const pass = passIn.value || ''; if(!user || !pass) return alert('Provide credentials'); try{ const res = await fetch('/api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ user, pass }) }); if(!res.ok) { alert('Login failed'); return; } const js = await res.json(); sessionStorage.setItem('adminToken', js.token); sessionStorage.setItem('adminUser', user); update(); showStatus('Logged in', true); }catch(err){ console.error('Login error', err); alert('Login error'); } });
    logoutBtn.addEventListener('click', e=>{ sessionStorage.removeItem('adminToken'); sessionStorage.removeItem('adminUser'); update(); showStatus('Logged out', true); });
    // server export/import handlers
    const svrExp = qs('#server-export'); if(svrExp) svrExp.addEventListener('click', async ()=>{
      const res = await authFetch('/api/export'); if(!res || !res.ok) return showStatus('Server export failed', false);
      const blob = await res.blob(); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'admin-data-server.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); showStatus('Downloaded server export', true);
    });
    const svrImpInput = qs('#server-import-file'); const svrImpBtn = qs('#server-import');
    if(svrImpBtn && svrImpInput) svrImpBtn.addEventListener('click', async ()=>{
      const f = svrImpInput.files && svrImpInput.files[0]; if(!f) return alert('Select a JSON file to import'); const txt = await f.text(); try{ const parsed = JSON.parse(txt); const res = await authFetch('/api/import', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(parsed) }); if(!res || !res.ok) return showStatus('Server import failed', false); showStatus('Imported to server', true); // reload from server
        const sd = await loadDataFromServer(); if(sd){ state = sd; localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); renderAll(); setLastSync(Date.now()); }
      }catch(err){ alert('Import failed: ' + err.message); }
    });
    update();
  }

})();
