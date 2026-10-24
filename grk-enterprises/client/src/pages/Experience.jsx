import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Building2,
  Trees,
  Wrench,
  BadgeCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Waves,
  Calendar,
  Activity
} from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CtaBand from '../components/CtaBand.jsx';
import BookingModal from '../components/BookingModal.jsx';
import {
  MILESTONES,
  CASE_STUDIES,
  TECHNICAL_PROCESS,
  BIZ,
  telLink,
  waLink,
  FREE_MSG
} from '../data/site.js';

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Seo
        title="15+ Years of Swimming Pool Maintenance Experience | GRK ENTERPRISES, Moinabad"
        description="Over 15 years of swimming pool maintenance experience, including Nizam Club hygiene standards and 30+ farmhouse swimming pools across Moinabad, Gandipet, and Hyderabad."
      />

      {/* EXPERIENCE HERO */}
      <section className="page-head-experience tint">
        <div className="wrap text-center">
          <span className="section-pill">15+ Years Track Record</span>
          <h1>Proven Pedigree in Commercial &amp; Farmhouse Pool Management</h1>
          <p className="lead muted">
            We don’t just clean water—we manage the complete chemical, mechanical, and biological ecosystem of swimming pools. From high-capacity institutional clubs to prestigious private estate pools.
          </p>
        </div>
      </section>

      {/* KEY STATS BAR */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="wrap">
          <div className="stats-strip" style={{ marginTop: 0 }}>
            <div className="stat-card">
              <strong>15+</strong>
              <span>Years Hands-on Experience</span>
            </div>
            <div className="stat-card">
              <strong>30+</strong>
              <span>Farmhouse Pools on Weekly Contract</span>
            </div>
            <div className="stat-card">
              <strong>Elite</strong>
              <span>Nizam Club Operational Standards</span>
            </div>
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Emergency Dispatch in Moinabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE ROADMAP */}
      <section className="section">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">Our Journey</span>
            <h2>A Decade &amp; a Half of Dedicated Pool Care</h2>
            <p className="lead muted">How fifteen years of practical field experience shaped our standards today.</p>
          </div>

          <div className="timeline-container">
            {MILESTONES.map((m, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-marker">
                  <span className="timeline-year">{m.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES & REAL-WORLD CHALLENGES SOLVED */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">Field Case Studies</span>
            <h2>Proven Results in Challenging Conditions</h2>
            <p className="lead muted">
              Real projects where our technical diagnostics, chemical balancing, and rapid restoration made the difference.
            </p>
          </div>

          <div className="case-studies-grid">
            {CASE_STUDIES.map((cs) => (
              <article className="case-study-card" key={cs.id}>
                <div className="case-img-wrap">
                  <img src={cs.image} alt={cs.title} loading="lazy" />
                  <span className="case-cat-pill">{cs.category}</span>
                </div>
                <div className="case-body">
                  <div className="case-result-badge">
                    <CheckCircle2 size={16} /> Result: {cs.result}
                  </div>
                  <h3>{cs.title}</h3>

                  <div className="case-detail-block">
                    <strong>Challenge:</strong>
                    <p>{cs.challenge}</p>
                  </div>

                  <div className="case-detail-block">
                    <strong>Solution:</strong>
                    <p>{cs.solution}</p>
                  </div>

                  <div className="case-detail-block highlight">
                    <strong>Takeaway:</strong>
                    <p>{cs.takeaway}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR 4-STEP TECHNICAL QUALITY STANDARD */}
      <section className="section">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">Our Methodology</span>
            <h2>The 4-Step Technical Protocol</h2>
            <p className="lead muted">The exact diagnostic and maintenance routine applied to every swimming pool.</p>
          </div>

          <div className="protocol-grid">
            {TECHNICAL_PROCESS.map((p) => (
              <div className="protocol-card" key={p.step}>
                <div className="protocol-step-num">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVITATION & CONSULTATION BOX */}
      <section className="section tint">
        <div className="wrap">
          <div className="exp-consult-card">
            <div className="exp-consult-copy">
              <span className="deal-badge">Free Welcome Offer</span>
              <h2>Have an Expert Inspect Your Pool This Week</h2>
              <p>
                Whether you own a private farmhouse, villa pool, or run a commercial resort, don’t settle for cloudy or irritating water. Let our senior technician visit your property for a comprehensive water test and plant room assessment—completely free of charge.
              </p>
              <div className="btns">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setModalOpen(true)}
                >
                  Schedule Free Site Inspection
                </button>
                <a
                  className="btn btn-wa"
                  href={waLink(FREE_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} /> WhatsApp +91 {BIZ.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Free Site Consultation & Inspection"
      />
    </main>
  );
}
