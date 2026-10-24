import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import enquiryRouter from './routes/enquiry.js';

const app = express();
const PORT = process.env.PORT || 5000;
const origins = (process.env.CORS_ORIGIN || 'http://localhost:5173').split(',').map((s) => s.trim());

app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin: origins, methods: ['GET', 'POST'] }));
app.use(express.json({ limit: '10kb' }));
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, max: 60, standardHeaders: true, legacyHeaders: false }));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'GRK ENTERPRISES API' }));
app.use('/api/enquiry', enquiryRouter);

app.use((_req, res) => res.status(404).json({ ok: false, message: 'Not found.' }));
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const status = err.type === 'entity.parse.failed' ? 400 : err.status || 500;
  if (status === 500) console.error(err);
  res.status(status).json({ ok: false, message: status === 500 ? 'Something went wrong on our side. Please use WhatsApp or call us.' : 'Invalid request.' });
});

app.listen(PORT, () => console.log(`GRK ENTERPRISES API listening on port ${PORT}`));
