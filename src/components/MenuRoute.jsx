import React, { useState } from 'react';
import { Search, Compass, Info } from 'lucide-react';
import FoodList from './FoodList';
import DrinksList from './DrinksList';
import barSnacksMenu from '../assets/BarSnacksMenu.jpg';

export default function MenuRoute({ scrollToSports }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [showOriginalMenu, setShowOriginalMenu] = useState(false);

  const tabs = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Bar Snacks' },
    { id: 'roast', name: 'Sunday Roast' },
    { id: 'beer', name: 'Beers & Ciders' },
    { id: 'wine-spirits', name: 'Wines & Spirits' }
  ];

  return (
    <section className="menu-section section animate-fade-in">
      <div className="container">
        
        {/* Title */}
        <div className="section-header text-center">
          <h2 className="section-title">Drinks & Food <span className="text-accent">Menu</span></h2>
          <p className="section-subtitle text-muted mb-4">
            Enjoy value draught beers, premium wines, and fresh home-cooked bar snacks at table-side value.
          </p>
          <div className="whats-on-redirect" onClick={scrollToSports}>
            <span className="redirect-icon">📅</span>
            <span>Looking for our match schedule? <strong>View Live Sports & What's On</strong></span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="menu-toolbar">
          {/* Tabs */}
          <div className="tabs-wrapper">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchText('');
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="search-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search drinks or food..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Original Menu Toggle Card */}
        <div className="original-menu-card">
          <div className="original-card-header" onClick={() => setShowOriginalMenu(!showOriginalMenu)}>
            <div className="header-info">
              <Info size={18} className="text-accent" />
              <span>Looking for RV Catering's original menu? Click to view</span>
            </div>
            <button className="toggle-btn">
              {showOriginalMenu ? 'Hide Menu Copy' : 'View Menu Copy'}
            </button>
          </div>
          
          {showOriginalMenu && (
            <div className="original-menu-body animate-fade-in">
              <img 
                src={barSnacksMenu} 
                alt="RV Catering Bar Snacks Original Menu Card" 
                className="original-menu-img"
              />
              <p className="original-menu-caption text-muted">
                Original Bar Snacks Menu provided by RV Catering at The Red Cow.
              </p>
            </div>
          )}
        </div>

        {/* Menu Lists container */}
        <div className="menu-lists-container">
          {activeTab === 'all' && (
            <div className="all-lists">
              <FoodList filterText={searchText} />
              <div className="divider-line"></div>
              <FoodList filterText={searchText} showOnlyRoast={true} />
              <div className="divider-line"></div>
              <DrinksList filterText={searchText} />
            </div>
          )}

          {activeTab === 'food' && (
            <FoodList filterText={searchText} />
          )}

          {activeTab === 'roast' && (
            <FoodList filterText={searchText} showOnlyRoast={true} />
          )}

          {activeTab === 'beer' && (
            <DrinksList filterText={searchText} />
          )}

          {activeTab === 'wine-spirits' && (
            <DrinksList filterText={searchText} />
          )}
        </div>

      </div>

      <style>{`
        .menu-section {
          background-color: var(--bg-dark);
          padding-top: 100px;
          min-height: 90vh;
        }

        .whats-on-redirect {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          background: rgba(242, 174, 27, 0.05);
          border: 1px solid rgba(242, 174, 27, 0.15);
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 0.9rem;
          color: var(--accent);
          cursor: pointer;
          transition: var(--transition-fast);
          user-select: none;
        }

        .whats-on-redirect:hover {
          background: rgba(242, 174, 27, 0.12);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .mb-4 {
          margin-bottom: 8px;
        }

        .menu-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 30px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
        }

        .tabs-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tab-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .tab-btn:hover {
          color: var(--text-light);
          background: rgba(255, 255, 255, 0.03);
        }

        .tab-btn.active {
          background: var(--primary);
          color: var(--text-light);
          box-shadow: 0 4px 10px rgba(var(--primary-rgb), 0.2);
        }

        .search-wrapper {
          position: relative;
          width: 280px;
          flex-shrink: 0;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          background: var(--bg-dark);
          border: 1px solid var(--border-color);
          color: var(--text-light);
          padding: 10px 14px 10px 42px;
          border-radius: 8px;
          outline: none;
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 1px var(--accent);
        }

        .original-menu-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          margin-bottom: 40px;
          overflow: hidden;
        }

        .original-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          cursor: pointer;
          transition: var(--transition-fast);
          user-select: none;
        }

        .original-card-header:hover {
          background: rgba(255, 255, 255, 0.015);
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .toggle-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-light);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .toggle-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .original-menu-body {
          padding: 24px;
          border-top: 1px dashed var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #0d0f12;
        }

        .original-menu-img {
          max-width: 480px;
          width: 100%;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .original-menu-caption {
          margin-top: 12px;
          font-size: 0.8rem;
          font-style: italic;
        }

        .menu-lists-container {
          margin-top: 20px;
        }

        .divider-line {
          height: 1px;
          background: var(--border-color);
          margin: 48px 0;
        }

        @media (max-width: 992px) {
          .menu-toolbar {
            flex-direction: column;
            align-items: stretch;
            padding: 16px;
          }
          .search-wrapper {
            width: 100%;
          }
          .tabs-wrapper {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
