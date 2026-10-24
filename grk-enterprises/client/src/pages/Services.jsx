import { useState } from 'react';
import {
  Calendar,
  Waves,
  FlaskConical,
  Settings,
  Leaf,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Clock,
  BadgeCheck
} from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CtaBand from '../components/CtaBand.jsx';
import BookingModal from '../components/BookingModal.jsx';
import { SERVICES_DETAILS, serviceWa, waLink, FREE_MSG, BIZ, telLink } from '../data/site.js';

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Weekly Maintenance Contracts');

  const openBooking = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  return (
    <main>
      <Seo
        title="Swimming Pool Services | Cleaning, Maintenance & Repair | GRK ENTERPRISES, Moinabad"
        description="Comprehensive swimming pool cleaning, weekly maintenance contracts, water chemistry testing, pump & filter repair in Moinabad, Rangareddy, and Hyderabad."
      />

      {/* SERVICES PAGE HEADER */}
      <section className="page-head-services tint">
        <div className="wrap text-center">
          <span className="section-pill">Our Services</span>
          <h1>Expert Swimming Pool Care &amp; Technical Services</h1>
          <p className="lead muted">
            From routine weekly maintenance to emergency green pool restoration, we keep pools sparkling clean, chemically safe, and fully operational across Moinabad and Hyderabad.
          </p>

          <nav className="services-jump-nav" aria-label="Quick jump to service">
            {SERVICES_DETAILS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="service-jump-chip">
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* SERVICES DETAILED LIST */}
      <section className="section">
        <div className="wrap">
          <div className="services-detailed-stack">
            {SERVICES_DETAILS.map((srv, idx) => {
              const IconComp = srv.icon;
              const isReversed = idx % 2 === 1;
              return (
                <article
                  className={`service-detailed-row ${isReversed ? 'row-reversed' : ''}`}
                  key={srv.id}
                  id={srv.id}
                >
                  <div className="service-media-side">
                    <div className="service-img-container">
                      <img src={srv.image} alt={srv.title} loading="lazy" />
                      <span className="service-floating-badge">{srv.badge}</span>
                    </div>
                  </div>

                  <div className="service-text-side">
                    <div className="service-badge-row">
                      <div className="service-icon-square">
                        <IconComp size={24} />
                      </div>
                      <span className="service-tagline-text">{srv.tagline}</span>
                    </div>

                    <h2>{srv.title}</h2>
                    <p className="service-overview">{srv.overview}</p>

                    <div className="service-features-card">
                      <h4>What’s Included:</h4>
                      <ul className="service-features-list">
                        {srv.features.map((feat, i) => (
                          <li key={i}>
                            <CheckCircle2 size={18} className="text-aqua" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-cta-row">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => openBooking(srv.title)}
                      >
                        Book This Service <ArrowRight size={16} />
                      </button>
                      <a
                        className="btn btn-wa"
                        href={serviceWa(srv.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={18} /> WhatsApp Enquiry
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">The GRK Standard</span>
            <h2>Why Farmhouse Owners Choose Us</h2>
            <p className="lead muted">15+ years of verified pool maintenance pedigree in Telangana.</p>
          </div>

          <div className="stats-strip" style={{ marginTop: 0 }}>
            <div className="stat-card">
              <BadgeCheck size={36} className="text-aqua" style={{ margin: '0 auto 0.5rem' }} />
              <strong>15+</strong>
              <span>Years of Hands-on Pool Care</span>
            </div>
            <div className="stat-card">
              <Waves size={36} className="text-aqua" style={{ margin: '0 auto 0.5rem' }} />
              <strong>30+</strong>
              <span>Farmhouse Pools Serviced</span>
            </div>
            <div className="stat-card">
              <Clock size={36} className="text-aqua" style={{ margin: '0 auto 0.5rem' }} />
              <strong>Fast</strong>
              <span>Emergency Dispatch in Moinabad</span>
            </div>
            <div className="stat-card">
              <ShieldCheck size={36} className="text-aqua" style={{ margin: '0 auto 0.5rem' }} />
              <strong>100%</strong>
              <span>Chemical Safety &amp; Clean Water Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </main>
  );
}
