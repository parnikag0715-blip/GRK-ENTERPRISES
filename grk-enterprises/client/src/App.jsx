import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Experience from './pages/Experience.jsx';
import About from './pages/About.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const NotFound = () => (
  <main className="wrap page-head">
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link className="btn btn-primary" to="/">Go to Home</Link>
  </main>
);

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Navigate to="/services" replace />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
