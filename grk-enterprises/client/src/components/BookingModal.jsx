import { useState, useEffect } from 'react';
import { X, Calendar, Phone, Send, CheckCircle2, MessageCircle, RotateCcw } from 'lucide-react';
import { BIZ, telLink, waLink } from '../data/site.js';

export default function BookingModal({ isOpen, onClose, defaultService = 'Weekly Maintenance' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Farmhouse Pool',
    service: defaultService,
    date: '',
    notes: ''
  });

  // Reset modal state when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(prev => ({
        ...prev,
        service: defaultService || 'Weekly Maintenance'
      }));
    }
  }, [isOpen, defaultService]);

  if (!isOpen) return null;

  const buildBookingMessage = (data) => {
    return `🏊‍♂️ *NEW POOL SERVICE REQUEST*
--------------------------------
👤 *Customer Name:* ${data.name.trim()}
📞 *Phone Number:* ${data.phone.trim()}
🏡 *Property Type:* ${data.propertyType}
🛠️ *Service Needed:* ${data.service}
📅 *Preferred Date:* ${data.date || 'Earliest available'}
${data.notes.trim() ? `📝 *Notes/Issues:* ${data.notes.trim()}\n` : ''}--------------------------------
📍 *Sent to GRK ENTERPRISES, Moinabad*`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    // 1. Persist booking to localStorage so no customer lead is ever lost
    try {
      const record = {
        id: `book-${Date.now()}`,
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        propertyType: formData.propertyType,
        service: formData.service,
        date: formData.date || '',
        notes: formData.notes.trim(),
        createdAt: new Date().toISOString()
      };
      const existing = JSON.parse(localStorage.getItem('grk_customer_bookings') || '[]');
      localStorage.setItem('grk_customer_bookings', JSON.stringify([record, ...existing]));
    } catch {
      // ignore storage error
    }

    // 2. Fire background post to backend if running
    try {
      fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: `Property: ${formData.propertyType} | Service: ${formData.service} | Date: ${formData.date || 'Earliest'} | Notes: ${formData.notes.trim() || 'None'}`
        })
      }).catch(() => {});
    } catch {
      // ignore network errors on static hosting
    }

    // 3. Open WhatsApp directly with full booking details
    const text = buildBookingMessage(formData);
    const targetUrl = waLink(text);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    // 4. Update UI to confirmed state
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = formData.name.trim()
      ? buildBookingMessage(formData)
      : `Hello GRK ENTERPRISES! I would like to book swimming pool service for my pool in Moinabad/Hyderabad.`;
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-head">
              <span className="badge-pill">Quick Booking</span>
              <h2>Schedule Pool Care Service</h2>
              <p className="muted">Book an expert inspection, cleaning, or chemical balancing for your pool in Moinabad &amp; Hyderabad.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="grid2">
                <div className="field">
                  <label htmlFor="bname">Your Name *</label>
                  <input
                    id="bname"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label htmlFor="bphone">Phone Number *</label>
                  <input
                    id="bphone"
                    required
                    type="tel"
                    placeholder="e.g. 9390630785"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid2">
                <div className="field">
                  <label htmlFor="bprop">Property Type</label>
                  <select
                    id="bprop"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="Farmhouse Pool">Farmhouse Swimming Pool</option>
                    <option value="Villa / Residential Pool">Villa / Private Pool</option>
                    <option value="Club / Resort Pool">Club / Resort / Hotel Pool</option>
                    <option value="Commercial / School Pool">Commercial / School Pool</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="bsrv">Service Needed</label>
                  <select
                    id="bsrv"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Weekly Maintenance">Weekly Maintenance Plan</option>
                    <option value="One-Time Deep Cleaning">One-Time Deep Cleaning &amp; Scrub</option>
                    <option value="Chemical Balancing & Shock">Chemical Balancing &amp; Shock Treatment</option>
                    <option value="Pool Vacuuming & Algae Removal">Pool Vacuuming &amp; Algae Removal</option>
                    <option value="Pump & Filter Maintenance">Pump &amp; Sand Filter Repair</option>
                    <option value="Chemicals & Accessories Delivery">Chemicals / Accessories Delivery</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="bdate">Preferred Date (Optional)</label>
                <input
                  id="bdate"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="field">
                <label htmlFor="bnotes">Notes / Pool Issues (Optional)</label>
                <textarea
                  id="bnotes"
                  rows={2}
                  placeholder="e.g. Water is cloudy, need green algae cleared before weekend..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn btn-primary" style={{ minHeight: '48px', fontSize: '1.02rem' }}>
                  <Send size={18} /> Submit &amp; Book Service
                </button>
                <button type="button" className="btn btn-wa" onClick={handleDirectWhatsApp} style={{ minHeight: '48px' }}>
                  <MessageCircle size={18} /> Book via WhatsApp Directly
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <CheckCircle2 size={56} className="text-emerald" style={{ margin: '0 auto 1rem', display: 'block' }} />
            <h2>Request Submitted Successfully!</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '0.6rem' }}>
              Thank you, <b>{formData.name || 'Valued Customer'}</b>!
            </p>
            <p className="muted" style={{ marginBottom: '1.6rem' }}>
              Your service request for <b>{formData.service}</b> has been recorded and forwarded to GRK ENTERPRISES. We will contact you at <b>{formData.phone}</b>.
            </p>

            <div style={{ display: 'grid', gap: '0.75rem', maxWidth: '420px', margin: '0 auto' }}>
              <a
                href={waLink(buildBookingMessage(formData))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
                style={{ width: '100%', minHeight: '48px', justifyContent: 'center' }}
              >
                <MessageCircle size={18} /> Open WhatsApp Chat ({BIZ.phones[0]})
              </a>
              <a
                href={telLink(BIZ.phones[0])}
                className="btn btn-outline"
                style={{ width: '100%', minHeight: '46px', justifyContent: 'center' }}
              >
                <Phone size={18} /> Call GRK Enterprises ({BIZ.phones[0]})
              </a>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSubmitted(false)}
                style={{ width: '100%', minHeight: '42px', justifyContent: 'center', marginTop: '0.4rem' }}
              >
                <RotateCcw size={16} /> Book Another Service
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
