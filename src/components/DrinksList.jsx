import React from 'react';

const draughts = [
  { name: 'Stella Artois', price: '£4.20', desc: 'Premium Belgian Lager (4.6% ABV)' },
  { name: 'Guinness Draught', price: '£4.60', desc: 'Classic Irish Dry Stout (4.2% ABV)' },
  { name: 'Foster\'s Lager', price: '£3.80', desc: 'Easy-drinking Australian Pale Lager (3.7% ABV)' },
  { name: 'Local Guest Craft Ale', price: '£4.10', desc: 'Rotating selection of regional cask ales' },
  { name: 'Strongbow Cider', price: '£3.95', desc: 'Refreshing dry apple cider (4.5% ABV)' }
];

const wines = [
  { name: 'House Pinot Grigio', price: '£4.50 / £16.00', desc: 'Dry, crisp white wine from Italy. Glass (175ml) / Bottle' },
  { name: 'House Merlot', price: '£4.75 / £17.50', desc: 'Medium-bodied plum and dark berry red. Glass (175ml) / Bottle' },
  { name: 'Zinfandel Rosé', price: '£4.60 / £16.50', desc: 'Sweet, fruity Californian rosé. Glass (175ml) / Bottle' },
  { name: 'Prosecco DOC', price: '£5.50 / £22.00', desc: 'Sparkling Italian white wine. Glass (125ml) / Bottle' }
];

const spirits = [
  { name: 'Hendrick\'s Gin', price: '£3.50', desc: 'Premium gin infused with cucumber & rose (25ml)' },
  { name: 'Smirnoff Vodka', price: '£2.80', desc: 'Classic triple-distilled vodka (25ml)' },
  { name: 'Jack Daniel\'s Whiskey', price: '£3.10', desc: 'Tennessee sour mash whiskey (25ml)' },
  { name: 'Captain Morgan Rum', price: '£2.90', desc: 'Spiced Caribbean golden rum (25ml)' },
  { name: 'Fever-Tree Tonic / Mixer', price: '£1.50', desc: 'Premium natural tonic waters & sodas' }
];

export default function DrinksList({ filterText = '' }) {
  const filterItem = (item) => {
    return item.name.toLowerCase().includes(filterText.toLowerCase()) || 
           item.desc.toLowerCase().includes(filterText.toLowerCase());
  };

  const filteredDraughts = draughts.filter(filterItem);
  const filteredWines = wines.filter(filterItem);
  const filteredSpirits = spirits.filter(filterItem);

  const hasAnyMatch = filteredDraughts.length > 0 || filteredWines.length > 0 || filteredSpirits.length > 0;

  if (!hasAnyMatch) {
    return (
      <div className="no-menu-results">
        <p className="text-muted">No drinks match your search criteria. Try a different term!</p>
      </div>
    );
  }

  return (
    <div className="drinks-menu-wrapper animate-fade-in">
      
      {/* Category: Draughts */}
      {filteredDraughts.length > 0 && (
        <div className="menu-category-section">
          <h3 className="category-title">Draughts & Ciders</h3>
          <div className="menu-items-grid">
            {filteredDraughts.map((item, idx) => (
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

      {/* Category: Wines */}
      {filteredWines.length > 0 && (
        <div className="menu-category-section">
          <h3 className="category-title">Wines</h3>
          <div className="menu-items-grid">
            {filteredWines.map((item, idx) => (
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

      {/* Category: Spirits */}
      {filteredSpirits.length > 0 && (
        <div className="menu-category-section">
          <h3 className="category-title">Spirits & Mixers</h3>
          <div className="menu-items-grid">
            {filteredSpirits.map((item, idx) => (
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
        .drinks-menu-wrapper {
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
