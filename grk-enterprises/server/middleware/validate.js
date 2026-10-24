const clean = (v, max) =>
  String(v ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);

export function validateEnquiry(req, res, next) {
  const b = req.body || {};
  if (b.website) return res.status(200).json({ ok: true, delivered: false, message: 'Thank you.' }); // honeypot

  const data = {
    name: clean(b.name, 80),
    phone: clean(b.phone, 20).replace(/[\s-]/g, ''),
    email: clean(b.email, 120),
    interest: clean(b.interest, 80),
    message: clean(b.message, 1000)
  };
  const errors = {};
  if (data.name.length < 2) errors.name = 'Enter your name.';
  if (!/^(?:\+?91)?[6-9]\d{9}$/.test(data.phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = 'Enter a valid email address or leave it blank.';
  if (!data.interest) errors.interest = 'Choose a product or service.';
  if (data.message.length < 5) errors.message = 'Write a short message (at least 5 characters).';

  if (Object.keys(errors).length) return res.status(422).json({ ok: false, message: 'Please correct the highlighted fields.', errors });
  req.enquiry = data;
  next();
}
