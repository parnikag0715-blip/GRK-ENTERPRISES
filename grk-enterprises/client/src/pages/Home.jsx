import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  FlaskConical,
  Settings,
  Calendar,
  Waves,
  Filter,
  Leaf,
  Wrench,
  TestTubes,
  ShieldCheck,
  Star,
  CheckCircle,
  PhoneCall,
  Clock,
  MapPin,
  PlusCircle,
  MessageSquareHeart
} from 'lucide-react';
import Seo from '../components/Seo.jsx';
import ExperienceBlock from '../components/ExperienceBlock.jsx';
import CtaBand from '../components/CtaBand.jsx';
import BookingModal from '../components/BookingModal.jsx';
import ReviewModal from '../components/ReviewModal.jsx';
import {
  BIZ,
  HERO_FEATURES,
  CARE_SOLUTIONS,
  SERVICES_DETAILS,
  waLink,
  serviceWa,
  telLink,
  FREE_MSG
} from '../data/site.js';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Weekly Maintenance Contracts');
  const [customerReviews, setCustomerReviews] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('grk_customer_reviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCustomerReviews(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const openBooking = (serviceName = 'Weekly Maintenance Contracts') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <main>
      <Seo
        title="GRK ENTERPRISES | Swimming Pool Cleaning & Maintenance Services, Moinabad"
        description="Crystal clear pools, hassle-free maintenance. Professional swimming pool cleaning, chemical balancing, vacuuming, and repair services from GRK ENTERPRISES, Moinabad, Rangareddy."
      />

      {/* HERO SECTION MATCHING REFERENCE DESIGN */}
      <section className="hero-reference">
        <div className="hero-bg-overlay"></div>
        <div className="wrap hero-content">
          <div className="hero-text-block">
            <span className="hero-badge">
              <Sparkles size={16} /> 15+ Years Pool Care Excellence in Moinabad &amp; Hyderabad
            </span>
            <h1 className="hero-title">
              Crystal Clear Pools,<br className="desktop-br" /> Hassle-Free Maintenance
            </h1>
            <p className="hero-subtitle">
              Professional pool cleaning, maintenance, chemical balancing, and repair services to keep your pool safe, clean, and ready to enjoy.
            </p>

            <div className="hero-btn-group">
              <button
                type="button"
                className="btn btn-hero-primary"
                onClick={() => openBooking('One-Time Deep Cleaning')}
              >
                Schedule Cleaning
              </button>
              <button
                type="button"
                className="btn btn-hero-glass"
                onClick={() => openBooking('Free Pool Assessment & Quote')}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* 3 FLOATING GLASSMORPHISM CARDS OVERLAPPING THE POOL */}
        <div className="wrap hero-floating-wrap">
          <div className="floating-cards-grid">
            {HERO_FEATURES.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div className="glass-card" key={feat.id}>
                  <div className="glass-card-header">
                    <div className="glass-icon-box">
                      <IconComp size={28} />
                    </div>
                    <span className="glass-tag">{feat.tag}</span>
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.description}</p>
                  <button
                    type="button"
                    className="glass-link-btn"
                    onClick={() => openBooking(feat.title)}
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-section" aria-label="Key highlights">
        <div className="wrap">
          <div className="stats-strip">
            <div className="stat-card">
              <strong>15+</strong>
              <span>Years of Industry Experience</span>
            </div>
            <div className="stat-card">
              <strong>30+</strong>
              <span>Farmhouse Pools Maintained</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Free First-Client Consultation</span>
            </div>
            <div className="stat-card">
              <strong>Fast</strong>
              <span>Same-Day Emergency Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE POOL CARE SOLUTIONS SECTION (FROM MOCKUP) */}
      <section className="section care-section" id="services">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">Our Services</span>
            <h2>Complete Pool Care Solutions</h2>
            <p className="lead muted">
              Comprehensive swimming pool upkeep and technical services tailored for farmhouses, private villas, resorts, and clubs.
            </p>
          </div>

          <div className="care-solutions-grid">
            {CARE_SOLUTIONS.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div
                  className="care-card"
                  key={sol.id}
                  onClick={() => openBooking(sol.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openBooking(sol.title)}
                >
                  <div className="care-icon-badge" style={{ color: sol.color, backgroundColor: `${sol.color}15` }}>
                    <IconComp size={28} />
                  </div>
                  <div className="care-card-content">
                    <h3>{sol.title}</h3>
                    <p>{sol.description}</p>
                    <span className="care-action-text">
                      Book Service <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISUAL SERVICE SHOWCASE WITH GENERATED PHOTOGRAPHY */}
      <section className="section showcase-section tint">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">Visual Gallery</span>
            <h2>Precision Maintenance &amp; Equipment</h2>
            <p className="lead muted">See our active cleaning, chemical balancing, and pump systems in operation.</p>
          </div>

          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-img-wrap">
                <img src="/images/pool-cleaning.jpg" alt="Technician performing pool cleaning with vacuum pole" />
                <span className="showcase-badge">Pool Vacuuming</span>
              </div>
              <div className="showcase-info">
                <h3>Skimming &amp; Vacuum Maintenance</h3>
                <p>Ensuring deep bottom silt, leaves, and insect debris are extracted without clouding pool clarity.</p>
                <button
                  type="button"
                  className="btn btn-outline small-btn"
                  onClick={() => openBooking('Pool Vacuuming')}
                >
                  Book Cleaning
                </button>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-img-wrap">
                <img src="/images/chemical-testing.jpg" alt="Water chemistry testing kit measuring pH and chlorine" />
                <span className="showcase-badge">Water Testing</span>
              </div>
              <div className="showcase-info">
                <h3>Accurate Water Chemistry</h3>
                <p>Testing free chlorine, pH levels, and total alkalinity to prevent green algae and eye irritation.</p>
                <button
                  type="button"
                  className="btn btn-outline small-btn"
                  onClick={() => openBooking('Chemical Balancing & Testing')}
                >
                  Request Water Test
                </button>
              </div>
            </div>

            <div className="showcase-item">
              <div className="showcase-img-wrap">
                <img src="/images/pool-equipment.jpg" alt="Commercial pool sand filter tank and circulation pump" />
                <span className="showcase-badge">Filtration Systems</span>
              </div>
              <div className="showcase-info">
                <h3>Pumps &amp; Sand Filter Repair</h3>
                <p>Complete servicing of multiport valves, motor seals, pressure gauges, and replacement sand media.</p>
                <button
                  type="button"
                  className="btn btn-outline small-btn"
                  onClick={() => openBooking('Pump & Filter Maintenance')}
                >
                  Inspect Equipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICE PACKAGES */}
      <section className="section" id="packages">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">Service Plans</span>
            <h2>Popular Pool Care Packages</h2>
            <p className="lead muted">
              Flexible service packages crafted for weekend farmhouses, residential villas, and commercial clubs.
            </p>
          </div>

          <div className="supplies-grid">
            {SERVICES_DETAILS.slice(0, 3).map((srv) => (
              <article className="supply-card" key={srv.id}>
                <div className="supply-img-wrap">
                  <img src={srv.image} alt={srv.title} />
                  <div className="supply-overlay">
                    <span className="supply-pill">{srv.badge}</span>
                  </div>
                </div>
                <div className="supply-body">
                  <div className="supply-title-row">
                    <srv.icon size={24} className="text-aqua" />
                    <h3>{srv.title}</h3>
                  </div>
                  <p className="muted">{srv.overview}</p>

                  <div className="supply-items-preview">
                    {srv.features.slice(0, 3).map((feat, i) => (
                      <span className="item-tag" key={i}>
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <div className="supply-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => openBooking(srv.title)}
                    >
                      Book Now <ArrowRight size={16} />
                    </button>
                    <a
                      className="btn btn-wa-icon"
                      href={serviceWa(srv.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-outline">
              View All Services &amp; Maintenance Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & LOCAL TRACK RECORD */}
      <section className="section tint">
        <div className="wrap split-experience">
          <div className="exp-copy">
            <span className="section-pill">Why GRK Enterprises</span>
            <h2>Proven Pool Care with 15+ Years Experience</h2>
            <p className="muted">
              We bring over 15 years of dedicated swimming pool operations, having served high-profile institutions like <b>Nizam Club</b> and over <b>30+ private farmhouse pools</b> across Moinabad, Gandipet, Chevella, and Hyderabad.
            </p>

            <ul className="ticks-modern">
              <li>
                <BadgeCheck className="text-aqua" size={22} />
                <div>
                  <strong>Nizam Club &amp; Farmhouse Proven</strong>
                  <p>Decades of rigorous operational standards ensuring crystal water clarity and swimmer safety.</p>
                </div>
              </li>
              <li>
                <BadgeCheck className="text-aqua" size={22} />
                <div>
                  <strong>End-to-End Service &amp; Diagnostics</strong>
                  <p>From tile scrubbing to pump rebuilds and precision chemical balancing—we handle it all.</p>
                </div>
              </li>
              <li>
                <BadgeCheck className="text-aqua" size={22} />
                <div>
                  <strong>Free First-Client Consultation</strong>
                  <p>We visit your site in Moinabad or Rangareddy to assess water balance, free of cost.</p>
                </div>
              </li>
              <li>
                <BadgeCheck className="text-aqua" size={22} />
                <div>
                  <strong>Emergency Same-Day Dispatch</strong>
                  <p>Quick response for sudden algae blooms or weekend pool party preparation.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="exp-side-card">
            <div className="exp-card-inner">
              <span className="deal-badge">Special Welcome Offer</span>
              <h3>Get a Free Pool Water &amp; Filter Inspection</h3>
              <p>
                Thinking about switching pool maintenance providers or dealing with cloudy water? Let our senior technician inspect your pool chemistry and filtration setup.
              </p>

              <div className="deal-perks">
                <div className="perk-row">
                  <CheckCircle size={18} className="text-aqua" /> Free on-site pH &amp; Chlorine check
                </div>
                <div className="perk-row">
                  <CheckCircle size={18} className="text-aqua" /> Filter pressure &amp; valve inspection
                </div>
                <div className="perk-row">
                  <CheckCircle size={18} className="text-aqua" /> Tailored chemical dosage schedule
                </div>
              </div>

              <a
                className="btn btn-wa full-btn"
                href={waLink(FREE_MSG)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Claim Free Inspection on WhatsApp
              </a>

              <div className="direct-call-row">
                <span>Or speak directly to our specialist:</span>
                <a href={telLink(BIZ.phones[0])}>
                  <PhoneCall size={16} /> +91 {BIZ.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section" id="testimonials">
        <div className="wrap">
          <div className="section-header text-center">
            <span className="section-pill">Customer Feedback</span>
            <h2>Honest Reviews from Real Pool Owners</h2>
            <p className="lead muted">
              We believe in honest service with zero fabricated reviews. Read what our clients have to say or share your own experience.
            </p>
          </div>

          {customerReviews.length > 0 ? (
            <div className="testimonials-grid">
              {customerReviews.slice(0, 3).map((t) => (
                <div className="testimonial-card" key={t.id}>
                  <div className="rating-stars">
                    {[...Array(Number(t.rating) || 5)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="testimonial-comment">"{t.comment}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span className="author-role">{t.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-reviews-card text-center" style={{ margin: '0 auto', maxWidth: '640px' }}>
              <div className="empty-icon-circle">
                <MessageSquareHeart size={38} className="text-aqua" />
              </div>
              <h3>Have We Maintained Your Swimming Pool?</h3>
              <p className="muted" style={{ margin: '0.5rem 0 1.6rem' }}>
                We do not post fake reviews. If our technicians have serviced your pool in Moinabad, Gandipet, or Hyderabad, please share your genuine feedback!
              </p>
              <div className="btns" style={{ justifyContent: 'center' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setReviewModalOpen(true)}
                >
                  <PlusCircle size={18} /> Write a Review
                </button>
                <Link to="/testimonials" className="btn btn-outline">
                  View Reviews Page
                </Link>
              </div>
            </div>
          )}

          {customerReviews.length > 0 && (
            <div className="text-center" style={{ marginTop: '2rem' }}>
              <Link to="/testimonials" className="btn btn-outline">
                View All Reviews &amp; Submit Yours <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* QUICK CTA BAND */}
      <CtaBand />

      {/* MODALS */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onReviewAdded={(newRev) => setCustomerReviews([newRev, ...customerReviews])}
      />
    </main>
  );
}
