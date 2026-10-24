import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo.jsx';
import { BIZ, SERVICES_DETAILS, telLink, waLink } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap fgrid">
        <div>
          <Logo light />
          <p>
            Professional swimming pool cleaning, scheduled maintenance contracts, water chemistry testing, and pump servicing for farmhouses, private villas, and clubs across Moinabad, Rangareddy, and Hyderabad.
          </p>
        </div>
        <div>
          <h3>Pool Services</h3>
          <ul>
            {SERVICES_DETAILS.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">All Services</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/testimonials">Customer Reviews</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h3>Visit or Call</h3>
          <address>
            <p><MapPin size={16} /> {BIZ.address.join(', ')}</p>
            {BIZ.phones.map((p) => (
              <p key={p}>
                <Phone size={16} /> <a href={telLink(p)}>+91 {p}</a>
              </p>
            ))}
            <p>
              <MessageCircle size={16} />{' '}
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp Enquiry (+91 {BIZ.phones[0]})
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="wrap copy">
        © {new Date().getFullYear()} GRK ENTERPRISES. All rights reserved.
      </div>
    </footer>
  );
}
