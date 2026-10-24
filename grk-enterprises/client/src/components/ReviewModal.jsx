import { useState } from 'react';
import { X, Star, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { waLink } from '../data/site.js';

export default function ReviewModal({ isOpen, onClose, onReviewAdded }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    location: '',
    category: 'Farmhouse Pools',
    title: '',
    comment: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;

    const newRev = {
      id: `rev-user-${Date.now()}`,
      name: form.name.trim(),
      location: form.location.trim() || 'Verified Customer',
      category: form.category,
      rating: Number(rating),
      date: 'Just now',
      verified: true,
      title: form.title.trim() || 'Great Pool Care Experience',
      comment: form.comment.trim(),
      helpful: 1
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('grk_customer_reviews') || '[]');
      localStorage.setItem('grk_customer_reviews', JSON.stringify([newRev, ...existing]));
    } catch {
      // ignore storage error
    }

    if (onReviewAdded) onReviewAdded(newRev);
    setSubmitted(true);
  };

  const handleShareWhatsApp = () => {
    const stars = '⭐'.repeat(rating);
    const msg = `Hello GRK ENTERPRISES! Here is my feedback/review:
- Rating: ${stars} (${rating}/5)
- Name: ${form.name}
- Location: ${form.location || 'Customer'}
- Service: ${form.category}
- Title: ${form.title || 'Great Service'}
- Review: "${form.comment}"`;
    window.open(waLink(msg), '_blank');
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
              <span className="badge-pill">Customer Feedback</span>
              <h2>Share Your Pool Care Experience</h2>
              <p className="muted">
                Your review helps other farmhouse owners and villa operators in Moinabad find trusted swimming pool care.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              {/* Star Rating Selector */}
              <div className="field">
                <label>Overall Rating *</label>
                <div className="star-rating-selector" role="radiogroup" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className="star-btn"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    >
                      <Star
                        size={32}
                        fill={(hoverRating || rating) >= star ? '#f59e0b' : 'none'}
                        color={(hoverRating || rating) >= star ? '#f59e0b' : '#cbd5e1'}
                      />
                    </button>
                  ))}
                  <span className="rating-num-label">
                    <b>{rating}.0</b> / 5.0 ({rating === 5 ? 'Excellent' : rating === 4 ? 'Very Good' : 'Good'})
                  </span>
                </div>
              </div>

              <div className="grid2">
                <div className="field">
                  <label htmlFor="revName">Your Full Name *</label>
                  <input
                    id="revName"
                    required
                    placeholder="e.g. Anand Varma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label htmlFor="revLoc">Property Type &amp; Location *</label>
                  <input
                    id="revLoc"
                    required
                    placeholder="e.g. Farmhouse Owner, Moinabad"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid2">
                <div className="field">
                  <label htmlFor="revCat">Service Category</label>
                  <select
                    id="revCat"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option value="Farmhouse Pools">Farmhouse Pools</option>
                    <option value="Private Villas">Private Villas</option>
                    <option value="Clubs & Commercial">Clubs &amp; Commercial</option>
                    <option value="Repairs & Recovery">Repairs &amp; Green Pool Recovery</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="revTitle">Headline / Summary</label>
                  <input
                    id="revTitle"
                    placeholder="e.g. Crystal clear water all summer!"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="revComment">Detailed Review *</label>
                <textarea
                  id="revComment"
                  required
                  rows={4}
                  placeholder="Share details about the water clarity, technician punctuality, chemical balancing, or equipment repair results..."
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">
                  <Send size={18} /> Post Review Online
                </button>
                <button type="button" className="btn btn-wa" onClick={handleShareWhatsApp}>
                  <MessageCircle size={18} /> Send via WhatsApp
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <CheckCircle2 size={54} className="text-emerald" />
            <h2>Thank You For Your Review!</h2>
            <p>
              Your review for <b>GRK ENTERPRISES</b> has been posted and added to the testimonials page. We truly appreciate your feedback!
            </p>
            <div className="btns" style={{ justifyContent: 'center' }}>
              <button className="btn btn-wa" onClick={handleShareWhatsApp}>
                <MessageCircle size={18} /> Also Share to WhatsApp
              </button>
              <button className="btn btn-outline" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
