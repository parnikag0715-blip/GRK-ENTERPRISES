import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { waLink, BIZ } from '../data/site.js';

export default function About() {
  return (
    <main>
      <Seo
        title="About GRK ENTERPRISES | 15+ Years Swimming Pool Care, Moinabad"
        description="GRK ENTERPRISES provides comprehensive swimming pool cleaning, maintenance contracts, and pump servicing across Moinabad, Gandipet, and Hyderabad."
      />
      <div className="wrap page-head prose">
        <span className="section-pill">About Our Team</span>
        <h1>15+ Years of Dedicated Swimming Pool Care</h1>
        <p>
          Located opposite the BSNL Office in Venkatapur, Moinabad, <b>GRK ENTERPRISES</b> is the trusted pool maintenance partner for private farmhouses, residential villas, and commercial clubs across Rangareddy and Hyderabad.
        </p>
        <p>
          We bring more than 15 years of hands-on swimming pool operations. That includes work experience maintaining the high-density facilities at <b>Nizam Club</b> and caring for more than <b>30+ private farmhouse pools</b> across Telangana. We understand the unique challenges of rural estate pools, including windblown silt, heavy leaf fall, and seasonal monsoon algae blooms.
        </p>
        <p>
          We manage the complete chemical, mechanical, and biological health of your pool—ensuring sparkling crystal-clear water with zero eye or skin irritation.
        </p>

        <div className="btns" style={{ marginTop: '2rem' }}>
          <Link className="btn btn-primary" to="/services">
            Explore Services <ArrowRight size={16} />
          </Link>
          <a
            className="btn btn-wa"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp +91 {BIZ.phones[0]}
          </a>
        </div>
      </div>
      <CtaBand />
    </main>
  );
}
