# Dark World Shop

A modern e-commerce website for dark web monitoring services with wallet checkout functionality.

## Local Development

### Option 1: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

### Option 2: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```
Then open: `http://localhost:8000`

### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Features

- Product catalog with filtering
- Shopping cart with localStorage persistence
- Wallet checkout with multiple cryptocurrency support
- Proof of payment upload with Formspree integration
- Tawk.to live chat widget
- Fully responsive design
- Mobile-optimized interface

## Deployment

To deploy this site:

1. **Netlify**: Drag and drop the folder or connect to Git
2. **Vercel**: Import the project and deploy
3. **GitHub Pages**: Push to a repository and enable Pages
4. **Traditional Hosting**: Upload files via FTP

## Domain Setup

If you own `darkworldshop.com`:
1. Purchase/configure the domain
2. Point DNS to your hosting provider
3. Deploy the site files

## File Structure

```
DarkWeb/
├── index.html          # Home page
├── products.html       # Products catalog
├── features.html       # Features page
├── styles.css          # All styles
├── script.js           # All JavaScript functionality
├── cart-storage.json   # Cart storage (optional)
└── product/            # Product detail pages
    ├── 1/index.html
    ├── 2/index.html
    └── 3/index.html
```

## Configuration

- **Formspree**: Configured at `https://formspree.io/f/mdkbnlww`
- **Tawk.to**: Live chat widget included on all pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Admin dashboard

I added a simple client-side admin dashboard at `admin.html`.

- Stores services, wallets (with optional QR image data), orders and transactions in browser localStorage.
- You can import/export a single JSON file to persist or move data between machines.
- Wallet entries support uploading a QR code image; the image is stored as data URL inside exported JSON.

To use it, open `admin.html` in your browser. For a local server you can run (from the project folder):

```powershell
python -m http.server 8000
```

Then open http://localhost:8000/admin.html in your browser.

### Run the new Express backend (persistent storage)

I've added a simple Node/Express backend that stores admin data to `data/data.json` and serves the site files.

1. Install dependencies and start the server (from the project root):

```powershell
npm install
npm start
```

2. Open the admin UI served by the server at:

    http://localhost:3000/admin.html

3. The server exposes two API endpoints:

- GET /api/data  — returns the persisted JSON data
- POST /api/data — replace the persisted data (expects JSON with services, wallets, orders, transactions arrays)

Notes:
- The server is intentionally simple and unauthenticated. Do not expose it to the public internet without adding authentication and HTTPS.
- If you want, I can update the admin UI to fetch and save data via these endpoints instead of localStorage.
Notes:
- The server now supports authenticated access (HTTP Basic) and file uploads.
- Default admin credentials (for local development) are `admin` / `admin`. Override by setting environment variables `ADMIN_USER` and `ADMIN_PASS` before starting the server.
-
Authentication and login
- The server still understands HTTP Basic (for tools), but the admin UI uses a short-lived token issued by `POST /api/login` (send JSON {user,pass}) which returns {token} that the UI stores in sessionStorage as `adminToken` and sends as `Authorization: Bearer <token>`.
- Use the login form in the dashboard header to authenticate.
 - Use the login page at `/login.html` to authenticate; it will store a short-lived token in browser sessionStorage.
Uploads and incremental sync
- POST /api/upload (protected) — accepts multipart/form-data with field `file`; returns { url: "/data/uploads/xxx.png" } and stores file in `data/uploads/`.
- POST /api/sync (protected) — accepts partial arrays of items (services, wallets, orders, transactions) and merges them by id using each item's `_modified` timestamp; useful for incremental sync from clients.
- GET /api/changes?since=<ms> (protected) — returns items modified since the given timestamp (milliseconds since epoch).
- HTTPS: The server can run with HTTPS if you provide PEM files. Place `key.pem` and `cert.pem` in a `cert/` folder in the project root or set env vars `SSL_KEY_PATH` and `SSL_CERT_PATH` to their absolute paths. If found, the server will start an HTTPS listener on the configured port. If not found it will start HTTP and warn.

Environment variables you can set:
- ADMIN_USER, ADMIN_PASS — admin credentials (default: admin/admin)
- JWT_SECRET — secret used to sign JWTs (default: dev-jwt-secret). Change this for production.
- JWT_EXPIRES_IN — JWT expiry (default: 1h). Example: 2h, 15m.
- SSL_KEY_PATH, SSL_CERT_PATH — optional paths to PEM key and cert to enable HTTPS.

File deletion and server import/export
- POST /api/delete-file (protected) — accepts JSON { path: '/data/uploads/...' } and deletes the uploaded file from disk if it exists (used when deleting wallet entries with uploaded QR images).
- GET /api/export (protected) — downloads the server's persisted JSON as an attachment.
- POST /api/import (protected) — accepts JSON body and replaces the server-side data file (same shape as exported JSON).

Frontend notes
- The admin UI (`admin.html`) now attempts to upload QR files to `/api/upload` when an admin is logged in (it prompts for credentials and stores them in sessionStorage as Basic auth). If upload fails the UI falls back to storing the QR as a data URL in localStorage.
- The UI uses incremental sync: items carry an `_modified` timestamp and only changed items are POSTed to `/api/sync`. LocalStorage is still used as a fallback when the server is unavailable.
