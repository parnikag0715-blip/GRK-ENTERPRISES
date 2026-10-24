import { Phone, MessageCircle, Gift } from 'lucide-react';
import { BIZ, telLink, waLink, FREE_MSG } from '../data/site.js';

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="wrap">
        <h2>Need Professional Swimming Pool Cleaning or Maintenance?</h2>
        <p>Contact GRK ENTERPRISES for scheduled pool upkeep, pump repairs, and water balancing in Moinabad &amp; Hyderabad.</p>
        <div className="btns">
          <a className="btn btn-light" href={telLink(BIZ.phones[0])}>
            <Phone size={18} /> Call +91 {BIZ.phones[0]}
          </a>
          <a className="btn btn-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <a className="btn btn-ghost" href={waLink(FREE_MSG)} target="_blank" rel="noopener noreferrer">
            <Gift size={18} /> Get Free Site Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
