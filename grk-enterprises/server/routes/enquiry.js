import { Router } from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateEnquiry } from '../middleware/validate.js';

const router = Router();
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data');

router.post('/', validateEnquiry, async (req, res, next) => {
  try {
    if (process.env.STORE_ENQUIRIES === 'true') {
      await fs.mkdir(dir, { recursive: true });
      await fs.appendFile(path.join(dir, 'enquiries.jsonl'), JSON.stringify({ ...req.enquiry, at: new Date().toISOString() }) + '\n');
      return res.status(201).json({ ok: true, delivered: true, message: 'Thank you. Your enquiry has been recorded and we will call you back.' });
    }
    // No storage or email configured: be honest about it.
    return res.status(200).json({
      ok: true,
      delivered: false,
      message: 'Your details are valid, but this site is not yet set up to store or email enquiries. Please send it on WhatsApp or call us so we receive it.'
    });
  } catch (e) {
    next(e);
  }
});

export default router;
