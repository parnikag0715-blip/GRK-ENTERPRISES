import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Logo from './Logo.jsx';
import BookingModal from './BookingModal.jsx';
import { BIZ, telLink, waLink } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="topbar">
          <div className="wrap">
            <span className="top-addr">📍 Opposite BSNL Office, Venkatapur, Moinabad, Rangareddy – 501504</span>
            <span className="top-phones">
              {BIZ.phones.map((p) => (
                <a key={p} href={telLink(p)}>
                  <Phone size={13} /> {p}
                </a>
              ))}
            </span>
          </div>
        </div>

        <div className="nav-container">
          <div className="wrap">
            <div className="nav-pill">
              <Logo />

              <button
                className="burger"
                aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>

              <nav className={`links ${open ? 'open' : ''}`} aria-label="Main">
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/experience"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  Testimonials
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  About Us
                </NavLink>

                <button
                  type="button"
                  className="btn btn-navy nav-cta-pill"
                  onClick={() => {
                    setOpen(false);
                    setModalOpen(true);
                  }}
                >
                  Book Service
                </button>

                {/* Mobile Drawer Quick Contacts */}
                <div className="mobile-drawer-contacts">
                  <a
                    href={telLink(BIZ.phones[0])}
                    className="btn btn-outline mobile-quick-btn"
                    onClick={() => setOpen(false)}
                  >
                    <Phone size={16} /> Call {BIZ.phones[0]}
                  </a>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa mobile-quick-btn"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop for closing mobile navigation drawer on outside tap */}
      {open && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
