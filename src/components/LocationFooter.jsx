import React from 'react';
import { MapPin, Phone, Clock, Compass, CheckCircle2 } from 'lucide-react';

const amenities = [
  { name: 'Dog Friendly', desc: 'Dogs welcome inside & outside' },
  { name: 'Free Parking', desc: 'On-site lot and street spaces' },
  { name: 'Wheelchair Accessible', desc: 'Accessible doors & layout' },
  { name: 'NFC & Apple Pay', desc: 'All contactless cards accepted' }
];

export default function LocationFooter() {
  return (
    <section className="location-section section" id="location">
      <div className="container">
        <div className="location-grid animate-fade-in-up">
          
          {/* Info Details */}
          <div className="info-column">
            <h2 className="section-title">Where to <span className="text-accent">Find Us</span></h2>
            <p className="location-intro text-muted">
              We are ideally located in Cheshunt, EN8 9AF, just a **5-minute walk from Cheshunt Station**. 
              Stop in after a walk through the Lea Valley Nature Reserve or drop in for the evening!
            </p>

            <div className="details-list">
              <div className="detail-item">
                <div className="detail-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Address</h4>
                  <p className="detail-value text-muted">
                    198 Windmill Lane, Cheshunt, Waltham Cross, EN8 9AF
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Phone</h4>
                  <a href="tel:01992623509" className="detail-value value-link">
                    01992 623509
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Opening Hours</h4>
                  <div className="hours-grid">
                    <span className="days">Mon – Thu:</span>
                    <span className="hours">11:00 AM – 11:00 PM</span>
                    <span className="days">Fri – Sat:</span>
                    <span className="hours text-accent font-bold">11:00 AM – 1:00 AM (Late)</span>
                    <span className="days">Sunday:</span>
                    <span className="hours">11:00 AM – 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="amenities-container">
              <h3 className="amenities-title">Pub Perks</h3>
              <div className="amenities-grid">
                {amenities.map((item, idx) => (
                  <div key={idx} className="amenity-badge">
                    <CheckCircle2 size={16} className="text-accent" />
                    <div>
                      <span className="amenity-name">{item.name}</span>
                      <span className="amenity-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="map-column">
            <div className="map-frame-wrapper">
              <iframe
                title="The Red Cow Pub Location Map"
                src="https://maps.google.com/maps?q=The%20Red%20Cow%20Cheshunt%20EN8%209AF&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
            <div className="station-transit">
              <Compass size={18} className="text-accent animate-pulse" />
              <span>Just **100 yards (2 min walk)** from Cheshunt Train Station</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .location-section {
          background-color: var(--bg-card);
          border-top: 1px solid var(--border-color);
          position: relative;
        }

        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .location-intro {
          font-size: 1.05rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .details-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .detail-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .detail-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--accent);
          flex-shrink: 0;
        }

        .detail-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-light);
        }

        .value-link:hover {
          color: var(--accent);
          text-decoration: underline;
        }

        .hours-grid {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 4px 12px;
          font-size: 0.95rem;
        }

        .hours-grid .days {
          color: var(--text-muted);
        }

        .hours-grid .hours {
          font-weight: 600;
        }

        .hours-grid .font-bold {
          font-weight: 700;
        }

        .amenities-container {
          border-top: 1px solid var(--border-color);
          padding-top: 32px;
        }

        .amenities-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .amenity-badge {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .amenity-name {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 1.2;
          margin-bottom: 2px;
        }

        .amenity-desc {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .map-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }

        .map-frame-wrapper {
          width: 100%;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .map-iframe {
          filter: grayscale(0.9) invert(0.9) contrast(1.2);
          transition: var(--transition-normal);
        }

        .map-frame-wrapper:hover .map-iframe {
          filter: grayscale(0.1) invert(0) contrast(1);
        }

        .station-transit {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .location-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .map-frame-wrapper {
            height: 350px;
          }
        }

        @media (max-width: 576px) {
          .amenities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
