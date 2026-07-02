import React from 'react';
import foodImage from '../assets/Food.jpg';

const barSnacks = [
  { name: 'Whitebait & Calamari', price: '£5.50', desc: 'Crispy fried whitebait and calamari rings served with homemade tartar sauce and lemon' },
  { name: 'Homemade Scotch Egg', price: '£3.20', desc: 'Classic soft-boiled pub egg wrapped in seasoned pork sausage meat with mustard mayonnaise' },
  { name: 'Franconian Chorizo Hotdog', price: '£5.50', desc: 'Premium Franconian chorizo sausage in a toasted brioche bun topped with garlic aioli' },
  { name: 'Loaded Nachos', price: '£4.95', desc: 'Fried tortilla chips, melted cheese, salsa, guacamole, sour cream, and jalapeños. (Add chilli con carne or smoked pulled pork for +£2.50)' },
  { name: 'Mediterranean Mezze Platter', price: '£5.95', desc: 'Mini beef kofte, creamy houmous, riatia dip, toasted pitta bread, and crispy falafel' },
  { name: 'Gourmet Cardington Beef Burger', price: '£10.50', desc: 'Gourmet British Cardington beef burger in a brioche bap with smoked applewood cheese, mustard mayo, relish, and skin-on fries' },
  { name: 'Skin-on Fries', price: '£2.00', desc: 'Portion of crispy hand-cut skin-on fries' }
];

export default function FoodList({ filterText = '', showOnlyRoast = false }) {
  const filterItem = (item) => {
    return item.name.toLowerCase().includes(filterText.toLowerCase()) || 
           item.desc.toLowerCase().includes(filterText.toLowerCase());
  };

  const filteredSnacks = barSnacks.filter(filterItem);
  const showFeaturedFishAndChips = 'fish & chips'.includes(filterText.toLowerCase()) || 'cod'.includes(filterText.toLowerCase()) || 'fries'.includes(filterText.toLowerCase());

  if (showOnlyRoast) {
    return (
      <div className="food-menu-wrapper animate-fade-in">
        <div className="menu-category-section sunday-roast-featured">
          <div className="sunday-roast-header">
            <span className="roast-badge">🔥 Sunday Highlight</span>
            <h3 className="category-title">Traditional Sunday Roast</h3>
            <div className="roast-timing text-accent">Served Sundays: 12:30 PM – 5:30 PM</div>
          </div>
          
          <div className="roast-content-layout">
            <div className="roast-details">
              <div className="roast-price-row">
                <span className="roast-item-name">Roast Beef, Chicken, or Nut Roast</span>
                <span className="roast-item-price text-accent">£12.95</span>
              </div>
              <p className="roast-text text-muted">
                Choose between Roast Topside of Beef, Roasted Chicken Breast, or a premium Nut Roast. 
                Served with a giant homemade Yorkshire pudding, crispy herb-roasted potatoes, honey-glazed parsnips, 
                rich red wine gravy, and a side of fresh seasonal vegetables.
              </p>
              <div className="roast-notes">
                * Kids roasts available for just £6.50. High chairs and family seating in our conservatory.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const hasAnyMatch = filteredSnacks.length > 0 || showFeaturedFishAndChips;

  if (!hasAnyMatch) {
    return (
      <div className="no-menu-results">
        <p className="text-muted">No food items match your search. Try searching for "fries" or "burger"!</p>
      </div>
    );
  }

  return (
    <div className="food-menu-wrapper animate-fade-in">
      
      {/* Featured Plate: Fish & Chips (uses Food.jpg) */}
      {showFeaturedFishAndChips && (
        <div className="menu-category-section featured-plate-section">
          <h3 className="category-title">Featured Pub Favorite</h3>
          <div className="featured-grid-layout">
            <div className="featured-img-box">
              <img 
                src={foodImage} 
                alt="Traditional Beer Battered Fish and Chips" 
                className="featured-food-img"
              />
              <div className="featured-badge">⭐️ Customer Favorite</div>
            </div>
            <div className="featured-details">
              <div className="featured-title-row">
                <h4 className="featured-item-title">Traditional Beer-Battered Fish & Chips</h4>
                <span className="featured-item-price text-accent">£11.50</span>
              </div>
              <p className="featured-text text-muted">
                Freshly caught cod fillet dipped in our signature crispy beer batter. 
                Served on a wooden board with a generous helping of skin-on fries, fresh garden peas, 
                crisp side salad, tartar sauce, and lemon wedges.
              </p>
              <div className="featured-tags">
                <span className="tag">Fresh Fish</span>
                <span className="tag">Hand-Cut Fries</span>
                <span className="tag">Traditional</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category: Bar Snacks */}
      {filteredSnacks.length > 0 && (
        <div className="menu-category-section">
          <h3 className="category-title">RV Catering - Bar Snacks</h3>
          <div className="menu-items-grid">
            {filteredSnacks.map((item, idx) => (
              <div key={idx} className="menu-item-row">
                <div className="item-main">
                  <span className="item-name">{item.name}</span>
                  <span className="item-dots"></span>
                  <span className="item-price text-accent">{item.price}</span>
                </div>
                <p className="item-desc text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .food-menu-wrapper {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .menu-category-section {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 32px;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
        }

        .category-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 24px;
          border-bottom: 2px solid rgba(242, 174, 27, 0.2);
          padding-bottom: 8px;
          text-align: left;
        }

        .featured-plate-section {
          background: linear-gradient(135deg, var(--bg-card) 60%, rgba(242, 174, 27, 0.03));
          border-color: rgba(242, 174, 27, 0.15);
        }

        .featured-grid-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          align-items: center;
        }

        .featured-img-box {
          position: relative;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .featured-food-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .featured-img-box:hover .featured-food-img {
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(180, 30, 36, 0.9);
          color: var(--text-light);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .featured-details {
          text-align: left;
        }

        .featured-title-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 16px;
        }

        .featured-item-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--text-light);
        }

        .featured-item-price {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.3rem;
        }

        .featured-text {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .featured-tags {
          display: flex;
          gap: 10px;
        }

        .featured-tags .tag {
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 4px;
          color: var(--text-muted);
        }

        .sunday-roast-featured {
          border-color: rgba(242, 174, 27, 0.2);
          background: linear-gradient(135deg, var(--bg-card) 60%, rgba(242, 174, 27, 0.05));
        }

        .sunday-roast-header {
          text-align: left;
          margin-bottom: 24px;
          border-bottom: 2px solid rgba(242, 174, 27, 0.2);
          padding-bottom: 12px;
        }

        .roast-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(242, 174, 27, 0.15);
          color: var(--accent);
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .roast-timing {
          font-size: 0.95rem;
          font-weight: 700;
          margin-top: 4px;
        }

        .roast-content-layout {
          text-align: left;
        }

        .roast-price-row {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          margin-bottom: 10px;
        }

        .roast-item-name {
          color: var(--text-light);
        }

        .roast-item-price {
          white-space: nowrap;
        }

        .roast-text {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .roast-notes {
          font-size: 0.8rem;
          font-style: italic;
          color: var(--text-muted);
        }

        .menu-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 40px;
        }

        .menu-item-row {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .item-main {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 4px;
        }

        .item-name {
          color: var(--text-light);
        }

        .item-dots {
          flex-grow: 1;
          border-bottom: 1px dotted rgba(255, 255, 255, 0.15);
          margin: 0 12px;
        }

        .item-price {
          font-weight: 700;
          white-space: nowrap;
        }

        .item-desc {
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .no-menu-results {
          padding: 60px 0;
          text-align: center;
        }

        @media (max-width: 992px) {
          .featured-grid-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .featured-img-box {
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .menu-items-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .menu-category-section {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
