import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import BookingModal from './BookingModal.jsx';
import { BIZ, telLink } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

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
            <span>📍 Opposite BSNL Office, Venkatapur, Moinabad, Rangareddy – 501504</span>
            <span className="top-phones">
              {BIZ.phones.map((p) => (
                <a key={p} href={telLink(p)}>
                  <Phone size={13} /> {p}
                </a>
              ))}
            </span>
          </div>
        </div>

        <div className="wrap nav-container">
          <div className="nav-pill">
            <Logo />

            <button
              className="burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            <nav className={`links ${open ? 'open' : ''}`} aria-label="Main">
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                Services
              </NavLink>
              <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
                Experience
              </NavLink>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : '')}>
                Testimonials
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                About Us
              </NavLink>

              <button
                type="button"
                className="btn btn-navy nav-cta-pill"
                onClick={() => setModalOpen(true)}
              >
                Book Service
              </button>
            </nav>
          </div>
        </div>
      </header>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
