import { useState } from 'react';
import { X, Calendar, Phone, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { BIZ, waLink } from '../data/site.js';

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello GRK ENTERPRISES! I want to book a service:
- Name: ${formData.name || 'Customer'}
- Phone: ${formData.phone || 'Not provided'}
- Property: ${formData.propertyType}
- Service Needed: ${formData.service}
- Preferred Date: ${formData.date || 'Earliest available'}
${formData.notes ? `- Notes: ${formData.notes}` : ''}`;
    window.open(waLink(text), '_blank');
    onClose();
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
              <p className="muted">Book an expert inspection, cleaning, or chemical balancing for your pool in Moinabad & Hyderabad.</p>
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
                    <option value="One-Time Deep Cleaning">One-Time Deep Cleaning & Scrub</option>
                    <option value="Chemical Balancing & Shock">Chemical Balancing & Shock Treatment</option>
                    <option value="Pool Vacuuming & Algae Removal">Pool Vacuuming & Algae Removal</option>
                    <option value="Pump & Filter Maintenance">Pump & Sand Filter Repair</option>
                    <option value="Chemicals & Accessories Delivery">Chemicals / Accessories Delivery</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="bdate">Preferred Date</label>
                <input
                  id="bdate"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="field">
                <label htmlFor="bnotes">Notes / Special Issues (Optional)</label>
                <textarea
                  id="bnotes"
                  rows={2}
                  placeholder="e.g., Water is slightly cloudy, need green algae cleared before weekend..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-wa" onClick={handleWhatsAppRedirect}>
                  <MessageCircle size={18} /> Book via WhatsApp Instantly
                </button>
                <button type="submit" className="btn btn-primary">
                  <Send size={18} /> Submit Request
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <CheckCircle2 size={54} className="text-emerald" />
            <h2>Thank You, {formData.name || 'Valued Customer'}!</h2>
            <p>Your service request for <b>{formData.service}</b> has been received. Our technician will call you shortly on <b>{formData.phone}</b>.</p>
            <div className="btns" style={{ justifyContent: 'center' }}>
              <button className="btn btn-wa" onClick={handleWhatsAppRedirect}>
                <MessageCircle size={18} /> Confirm on WhatsApp Now
              </button>
              <button className="btn btn-outline" onClick={onClose}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
