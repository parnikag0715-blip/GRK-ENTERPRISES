import { useState, useEffect } from 'react';
import {
  Star,
  CheckCircle,
  ThumbsUp,
  MessageCircle,
  PlusCircle,
  ShieldCheck,
  MessageSquareHeart
} from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CtaBand from '../components/CtaBand.jsx';
import ReviewModal from '../components/ReviewModal.jsx';
import { waLink, BIZ } from '../data/site.js';

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState({});

  // Load genuine reviews from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('grk_customer_reviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setReviews(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleReviewAdded = (newRev) => {
    setReviews([newRev, ...reviews]);
  };

  const handleHelpful = (id) => {
    if (helpfulClicked[id]) return;
    setHelpfulClicked({ ...helpfulClicked, [id]: true });
    const updated = reviews.map((r) =>
      r.id === id ? { ...r, helpful: (r.helpful || 0) + 1 } : r
    );
    setReviews(updated);
    try {
      localStorage.setItem('grk_customer_reviews', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const categories = ['All', 'Farmhouse Pools', 'Private Villas', 'Clubs & Commercial', 'Repairs & Recovery'];

  const filteredReviews =
    activeCategory === 'All'
      ? reviews
      : reviews.filter((r) => r.category === activeCategory);

  const reviewCount = reviews.length;
  const avgRating =
    reviewCount > 0
      ? (reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0) / reviewCount).toFixed(1)
      : '5.0';

  return (
    <main>
      <Seo
        title="Client Reviews & Feedback | GRK ENTERPRISES, Moinabad"
        description="Read genuine customer reviews or share your feedback for GRK ENTERPRISES swimming pool cleaning, maintenance, and chemical services in Moinabad & Hyderabad."
      />

      {/* HEADER SECTION */}
      <section className="page-head-reviews tint">
        <div className="wrap">
          <div className="review-hero-grid">
            <div className="review-score-box">
              <span className="section-pill">Customer Feedback</span>
              <h1>Real Reviews from Pool Owners</h1>
              <p className="lead muted">
                We believe in genuine transparency. We do not publish artificial reviews. Every rating below is submitted directly by farmhouse owners, club managers, and private pool clients we service.
              </p>

              {reviewCount > 0 && (
                <div className="score-summary-row">
                  <div className="big-score">{avgRating}</div>
                  <div className="score-details">
                    <div className="score-stars">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={22} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className="score-subtitle">
                      Average {avgRating} out of 5.0 • <b>{reviewCount} Customer Review{reviewCount > 1 ? 's' : ''}</b>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="review-cta-box">
              <div className="rating-bars-card" style={{ textAlign: 'center' }}>
                <ShieldCheck size={36} className="text-aqua" style={{ margin: '0 auto 0.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>100% Genuine Feedback</h3>
                <p className="muted" style={{ margin: 0, fontSize: '0.92rem' }}>
                  Have we serviced or cleaned your pool? Share your experience to help other farmhouse owners.
                </p>
              </div>

              <div className="review-button-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setReviewModalOpen(true)}
                >
                  <PlusCircle size={18} /> Write a Review
                </button>
                <a
                  className="btn btn-wa"
                  href={waLink('Hello GRK ENTERPRISES, I would like to send my feedback on your pool services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} /> Send on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS LIST OR TRANSPARENT EMPTY STATE */}
      <section className="section">
        <div className="wrap">
        {reviewCount > 0 ? (
          <>
            <div className="reviews-filter-bar">
              <span className="filter-label">Filter by Property:</span>
              <div className="filter-chips-list">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    className={`filter-chip ${activeCategory === cat ? 'chip-active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="reviews-masonry-grid">
              {filteredReviews.map((rev) => (
                <article className="review-card-full" key={rev.id}>
                  <div className="review-card-top">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">{rev.name.charAt(0)}</div>
                      <div>
                        <strong className="reviewer-name">{rev.name}</strong>
                        <span className="reviewer-location">{rev.location}</span>
                      </div>
                    </div>

                    <span className="verified-pill">
                      <CheckCircle size={14} /> Verified Client
                    </span>
                  </div>

                  <div className="review-stars-date">
                    <div className="card-stars">
                      {[...Array(Number(rev.rating) || 5)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className="review-date">{rev.date}</span>
                  </div>

                  {rev.title && <h3 className="review-title">{rev.title}</h3>}

                  <p className="review-body-text">"{rev.comment}"</p>

                  <div className="review-card-bottom">
                    <span className="review-tag">{rev.category}</span>
                    <button
                      type="button"
                      className={`helpful-btn ${helpfulClicked[rev.id] ? 'helpful-active' : ''}`}
                      onClick={() => handleHelpful(rev.id)}
                      title="Mark as helpful"
                    >
                      <ThumbsUp size={14} /> Helpful ({rev.helpful || 0})
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-reviews-card text-center">
            <div className="empty-icon-circle">
              <MessageSquareHeart size={44} className="text-aqua" />
            </div>
            <h2>Be the First to Review Us</h2>
            <p className="lead muted" style={{ maxWidth: '580px', margin: '0 auto 2rem' }}>
              We do not believe in publishing fabricated reviews. If our team has maintained your pool, cleared algae, or serviced your pump, please take a moment to write a brief review!
            </p>
            <div className="btns" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setReviewModalOpen(true)}
              >
                <PlusCircle size={18} /> Write Your Review
              </button>
              <a
                className="btn btn-wa"
                href={waLink('Hello GRK ENTERPRISES, I would like to share my review for your pool service.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Share Feedback via WhatsApp
              </a>
            </div>
          </div>
        )}
        </div>
      </section>

      <CtaBand />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onReviewAdded={handleReviewAdded}
      />
    </main>
  );
}
