import React from 'react';
import { Tv, Sparkles, Flame, Calendar, Music } from 'lucide-react';
import beerGardenVibrant from '../assets/BeerGarden_Vibrant.png';

export default function FeaturesGrid({ setCurrentPage, scrollToSports }) {
  return (
    <section className="features-section section">
      <div className="container">
        <div className="section-header text-center animate-fade-in-up">
          <h2 className="section-title">What's on at <span className="text-accent">The Red Cow</span></h2>
          <p className="section-subtitle text-muted">
            From premier live sports and late nights to an all-weather garden, discover why we are Cheshunt's favorite local.
          </p>
        </div>

        <div className="features-grid">
          {/* Feature 1: Live Sports */}
          <div className="card feature-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="feature-icon-wrapper">
              <Tv size={32} className="feature-icon" />
            </div>
            <h3 className="feature-title">Live Sports Match Days</h3>
            <p className="feature-text text-muted">
              We show every major game live on our screens, covering the **Premier League** and the **World Cup**. 
              With a fantastic atmosphere, Sky Sports, and TNT Sports, we're the best spot in Cheshunt for sports fans.
            </p>
            <button className="feature-btn" onClick={scrollToSports}>
              See Match Schedule <span className="arrow">→</span>
            </button>
          </div>

          {/* Feature 2: Beer Garden */}
          <div className="card feature-card beer-garden-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="beer-garden-img-container">
              <img 
                src={beerGardenVibrant} 
                alt="The Red Cow Decked Beer Garden" 
                className="beer-garden-img"
              />
              <div className="img-overlay-badge">☀️ Sunny & Heated</div>
            </div>
            <h3 className="feature-title">All-Weather Beer Garden</h3>
            <p className="feature-text text-muted">
              Relax in our beautiful decked garden, known locally for its **good covered smoking area** and heated outdoor spaces. 
              Enjoy a cold pint outside in any weather! Plus, kids love our **play area with a bouncy castle** during warm afternoons.
            </p>
          </div>

          {/* Feature 3: Weekend Vibes */}
          <div className="card feature-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="feature-icon-wrapper">
              <Music size={32} className="feature-icon" />
            </div>
            <h3 className="feature-title">Weekend Vibes & DJ Terry</h3>
            <p className="feature-text text-muted">
              Our weekends are filled with entertainment, featuring local acoustic acts and high-energy sets from our legendary resident, **DJ Terry**. 
              Unwind and socialize late — we are **open until 1:00 AM** every Friday and Saturday night!
            </p>
            <button className="feature-btn" onClick={() => {
              setCurrentPage('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              Browse Drink Values <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .features-section {
          background-color: var(--bg-dark);
          position: relative;
        }

        .section-header {
          max-width: 700px;
          margin: 0 auto 56px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 1.1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          height: 100%;
        }

        .feature-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: rgba(var(--primary-rgb), 0.15);
          border: 1px solid rgba(var(--primary-rgb), 0.2);
          border-radius: 12px;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .feature-icon {
          color: var(--accent);
        }

        .beer-garden-img-container {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 24px;
          border: 1px solid var(--border-color);
        }

        .beer-garden-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .feature-card:hover .beer-garden-img {
          transform: scale(1.08);
        }

        .img-overlay-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(13, 15, 18, 0.85);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid var(--accent);
          color: var(--accent);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 50px;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .feature-text {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .feature-btn {
          background: transparent;
          border: none;
          color: var(--accent);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-fast);
        }

        .feature-btn .arrow {
          transition: var(--transition-fast);
        }

        .feature-btn:hover {
          color: var(--text-light);
        }

        .feature-btn:hover .arrow {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
