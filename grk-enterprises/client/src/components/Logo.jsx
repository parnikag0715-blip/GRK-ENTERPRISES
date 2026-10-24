import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="GRK ENTERPRISES home">
      <div className="logo-icon-wrapper">
        <svg viewBox="0 0 44 44" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="dropGrad" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="0.5" stopColor="#0284c7" />
              <stop offset="1" stopColor="#0a2540" />
            </linearGradient>
            <linearGradient id="waveGrad" x1="10" y1="20" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#67e8f9" />
            </linearGradient>
          </defs>
          {/* Soft outer glow */}
          <circle cx="22" cy="22" r="20" fill="#e0f2fe" opacity="0.6" />
          {/* Drop shape */}
          <path
            d="M22 6C22 6 10 20 10 28.5C10 35.127 15.373 40.5 22 40.5C28.627 40.5 34 35.127 34 28.5C34 20 22 6 22 6Z"
            fill="url(#dropGrad)"
          />
          {/* Inner waves */}
          <path
            d="M14 28C17 25 21 31 25 28C28 25.5 30 26.5 31.5 27.5"
            stroke="url(#waveGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M16 33C18.5 30.5 22 34 25.5 32C27.5 30.5 29 31 30 31.8"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>
      <div className="logo-text">
        <span className="logo-title"><b>GRK</b> ENTERPRISES</span>
        <span className="logo-subtitle">POOL CARE &amp; SUPPLIES</span>
      </div>
    </Link>
  );
}
