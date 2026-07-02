import React from 'react';
import { ChevronRight, Calendar, MapPin, Eye } from 'lucide-react';
import redCowExterior from '../assets/RedCowExterior.png';

export default function HeroSection({ setCurrentPage, scrollToLocation, scrollToSports }) {
  return (
    <section className="hero-section animate-fade-in">
      <div className="hero-bg-overlay"></div>
      
      <div className="hero-container container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Established over 200 Years Ago in Cheshunt
          </div>
          
          <h1 className="hero-title">
            Your Local for <span className="highlight-text">Live Sports</span>, 
            <br />Cold Pints, and <span className="highlight-text">Late Nights</span>
          </h1>
          
          <p className="hero-description">
            Join us at The Red Cow, a traditional pub located in the heart of Cheshunt. 
            Enjoy our fully decked all-weather beer garden, catch all the action live on our big screens, 
            or drop in for a late night pint with weekend vibes until 1:00 AM.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary btn-lg" 
              onClick={() => {
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Eye size={18} />
              View Menu
            </button>
            <button className="btn btn-accent btn-lg" onClick={scrollToSports}>
              <Calendar size={18} />
              Live Sports Schedule
            </button>
            <button className="btn btn-outline btn-lg" onClick={scrollToLocation}>
              <MapPin size={18} />
              Find Us
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          background: url(${redCowExterior}) no-repeat center center;
          background-size: cover;
          padding-top: 100px;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--border-color);
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom, 
            rgba(13, 15, 18, 0.85) 0%, 
            rgba(13, 15, 18, 0.7) 50%,
            rgba(13, 15, 18, 0.95) 100%
          );
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-content {
          max-width: 800px;
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 24px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          line-height: 1.15;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }

        .highlight-text {
          color: var(--accent);
          background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 680px;
          line-height: 1.65;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 75vh;
            padding-top: 120px;
            padding-bottom: 60px;
          }
          
          .hero-title {
            font-size: 2.4rem;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 30px;
          }

          .hero-actions {
            flex-direction: column;
            gap: 12px;
          }

          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
