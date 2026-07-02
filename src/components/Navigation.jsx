import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navigation({ currentPage, setCurrentPage, scrollToLocation }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        {/* Logo */}
        <div className="logo" onClick={() => handleNav('home')}>
          <div className="logo-icon">🐂</div>
          <span className="logo-text">The Red Cow</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'menu' ? 'active' : ''}`}
            onClick={() => handleNav('menu')}
          >
            Menu
          </button>
          <button 
            className="btn btn-outline btn-sm btn-find-us"
            onClick={scrollToLocation}
          >
            <MapPin size={16} />
            Find Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in">
          <button 
            className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
          >
            Home
          </button>
          <button 
            className={`mobile-nav-link ${currentPage === 'menu' ? 'active' : ''}`}
            onClick={() => handleNav('menu')}
          >
            Menu
          </button>
          <button 
            className="btn btn-accent mobile-find-btn"
            onClick={() => {
              setIsOpen(false);
              scrollToLocation();
            }}
          >
            <MapPin size={16} />
            Find Us
          </button>
        </div>
      )}

      {/* Embedded CSS for layout specificity */}
      <style>{`
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          transition: var(--transition-normal);
        }
        
        .nav-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
        }

        .logo-icon {
          font-size: 1.8rem;
          filter: drop-shadow(0 2px 8px rgba(var(--primary-rgb), 0.5));
          transition: var(--transition-normal);
        }

        .logo:hover .logo-icon {
          transform: rotate(-10deg) scale(1.1);
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--text-light) 60%, var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          position: relative;
          padding: 8px 4px;
          transition: var(--transition-fast);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition-normal);
        }

        .nav-link:hover {
          color: var(--text-light);
        }

        .nav-link.active {
          color: var(--accent);
        }

        .nav-link.active::after {
          width: 100%;
          background: var(--accent);
        }

        .btn-find-us {
          padding: 8px 20px;
          font-size: 0.85rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          background: var(--bg-dark);
          border-bottom: 1px solid var(--border-color);
          padding: 16px 24px 24px;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.1rem;
          text-align: left;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          width: 100%;
        }

        .mobile-nav-link:last-of-type {
          border-bottom: none;
        }

        .mobile-nav-link.active {
          color: var(--accent);
        }

        .mobile-find-btn {
          width: 100%;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
