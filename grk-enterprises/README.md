# GRK ENTERPRISES Website (React + Vite, Node + Express)

## Structure
- `client/` React (Vite) frontend. Products live in `client/src/data/site.js`.
- `server/` Express API (`POST /api/enquiry`, `GET /api/health`).

## Run locally
Needs Node 18+. Use two terminals.

    # Backend
    cd server && cp .env.example .env && npm install && npm run dev      # http://localhost:5000

    # Frontend
    cd client && cp .env.example .env && npm install && npm run dev      # http://localhost:5173

In dev, Vite proxies `/api` to port 5000.

## Build
    cd client && npm run build      # output in client/dist
    cd server && npm start

## Configuration
- `client/.env`: `VITE_SITE_URL` (canonical/OG), `VITE_API_URL` (backend URL in production).
- `server/.env`: `PORT`, `CORS_ORIGIN` (comma-separated frontend origins), `STORE_ENQUIRIES`.
- Replace `https://YOUR-DOMAIN.example` in `client/index.html`, `client/public/robots.txt` and `client/public/sitemap.xml` with the real domain.
- Hero photo: add `client/public/images/hero.jpg` (optional; a built-in pool-tile design shows otherwise). Product photos: set `image: '/images/x.jpg'` on any item in `site.js`.

## Contact form behaviour (honest by design)
The API validates and sanitises input. With `STORE_ENQUIRIES=false` (default) nothing is stored or emailed, and the form tells the visitor so and offers a WhatsApp button. With `STORE_ENQUIRIES=true` enquiries are appended to `server/data/enquiries.jsonl` (disk may be ephemeral on free hosts).
To add email: `npm i nodemailer` in `server/`, create a transporter from the `SMTP_*` variables in `.env.example`, and call `sendMail` to `NOTIFY_TO` inside `server/routes/enquiry.js` after validation.

## Deployment
- Frontend (Netlify / Vercel / Cloudflare Pages): root `client`, build `npm run build`, publish `dist`, set `VITE_API_URL` and `VITE_SITE_URL`. Add an SPA rewrite: Netlify `/*  /index.html  200` in `client/public/_redirects`; Vercel rewrite all to `/index.html`.
- Backend (Render / Railway / any VPS): root `server`, build `npm install`, start `npm start`, set `CORS_ORIGIN` to the frontend URL.
