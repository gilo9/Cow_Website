import React from 'react';

export default function Footer({ setCurrentPage, scrollToLocation }) {
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="global-footer">
      <div className="container footer-grid">
        {/* Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-emoji">🐂</span>
            <span className="logo-text">The Red Cow</span>
          </div>
          <p className="brand-desc text-muted">
            A traditional, cozy pub in Cheshunt with a rich 200-year history. 
            Your destination for live Premier League matches, local beers, and family weekends.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-icon-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" className="social-icon-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://twitter.com" className="social-icon-btn" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleNav('home')}>Home</button></li>
            <li><button onClick={() => handleNav('menu')}>Menu & Pricing</button></li>
            <li><button onClick={scrollToLocation}>Location & Map</button></li>
            <li><a href="tel:01992623509">Call to Book</a></li>
          </ul>
        </div>

        {/* Operating Hours summary */}
        <div className="footer-col hours-col">
          <h4 className="footer-heading">Pub Hours</h4>
          <ul className="footer-hours-list text-muted">
            <li>
              <span className="day-label">Monday – Thursday:</span>
              <span className="hour-val">11:00 AM – 11:00 PM</span>
            </li>
            <li>
              <span className="day-label text-accent">Friday – Saturday:</span>
              <span className="hour-val text-accent font-semibold">11:00 AM – 1:00 AM</span>
            </li>
            <li>
              <span className="day-label">Sunday:</span>
              <span className="hour-val">11:00 AM – 11:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="container bottom-wrapper">
          <p className="copy-text text-muted">
            &copy; {new Date().getFullYear()} The Red Cow. All rights reserved. RV Catering & Pub management.
          </p>
          <p className="disclaimer-text text-muted">
            Designed for table-side browsing and local community trust. Walking distance to Cheshunt Train Station.
          </p>
        </div>
      </div>

      <style>{`
        .global-footer {
          background-color: #0b0c0f;
          border-top: 1px solid var(--border-color);
          padding: 60px 0 0;
          color: var(--text-light);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 48px;
          margin-bottom: 48px;
          text-align: left;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .logo-emoji {
          font-size: 1.6rem;
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: -0.01em;
        }

        .brand-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .social-icon-btn:hover {
          background: var(--primary);
          color: var(--text-light);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .footer-heading {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-light);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list button {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 0.9rem;
          text-align: left;
          cursor: pointer;
          padding: 0;
          transition: var(--transition-fast);
        }

        .footer-links-list button:hover {
          color: var(--accent);
          transform: translateX(4px);
        }

        .footer-links-list a {
          color: var(--text-muted);
          font-size: 0.9rem;
          display: inline-block;
        }

        .footer-links-list a:hover {
          color: var(--accent);
          transform: translateX(4px);
        }

        .footer-hours-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.9rem;
        }

        .footer-hours-list li {
          display: flex;
          flex-direction: column;
        }

        .day-label {
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 2px;
        }

        .hour-val {
          font-weight: 500;
        }

        .font-semibold {
          font-weight: 700;
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding: 24px 0;
          background: #07080a;
        }

        .bottom-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .copy-text {
          font-size: 0.8rem;
        }

        .disclaimer-text {
          font-size: 0.75rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-col {
            align-items: center;
            text-align: center;
          }
          .footer-links-list button {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
