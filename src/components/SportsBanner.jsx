import React from 'react';
import { Tv, Trophy } from 'lucide-react';

const matches = [
  {
    id: 1,
    homeTeam: 'Arsenal',
    awayTeam: 'Manchester City',
    competition: 'Premier League',
    date: 'Saturday, July 4th',
    time: '12:30 PM',
    channel: 'Sky Sports'
  },
  {
    id: 2,
    homeTeam: 'Chelsea',
    awayTeam: 'Liverpool',
    competition: 'Premier League',
    date: 'Sunday, July 5th',
    time: '4:30 PM',
    channel: 'Sky Sports'
  },
  {
    id: 3,
    homeTeam: 'England',
    awayTeam: 'France',
    competition: 'World Cup Qualifier',
    date: 'Wednesday, July 8th',
    time: '7:45 PM',
    channel: 'TNT Sports'
  },
  {
    id: 4,
    homeTeam: 'Manchester United',
    awayTeam: 'Tottenham Hotspur',
    competition: 'Premier League',
    date: 'Saturday, July 11th',
    time: '5:30 PM',
    channel: 'TNT Sports'
  }
];

export default function SportsBanner() {
  return (
    <section className="sports-section section">
      <div className="container">
        <div className="section-header text-center animate-fade-in-up">
          <h2 className="section-title">
            <Trophy size={28} className="title-icon" />
            Live Matches on the Big Screen
          </h2>
          <p className="section-subtitle text-muted">
            Enjoy cold pints, great burgers, and premium pub viewing. 
            We show all matches live on Sky Sports and TNT Sports.
          </p>
        </div>

        <div className="scoreboard-container animate-fade-in-up">
          <div className="scoreboard-header">
            <div className="scoreboard-title">Cheshunt Match Day Hub</div>
            <div className="scoreboard-led">🔴 Live Broadcast</div>
          </div>
          
          <div className="fixtures-list">
            {matches.map((match) => (
              <div key={match.id} className="fixture-row">
                {/* Competition Badge */}
                <div className="comp-col">
                  <span className={`comp-badge ${match.competition.toLowerCase().replace(' ', '-')}`}>
                    {match.competition}
                  </span>
                </div>

                {/* Matchup */}
                <div className="teams-col">
                  <span className="team home">{match.homeTeam}</span>
                  <span className="vs">VS</span>
                  <span className="team away">{match.awayTeam}</span>
                </div>

                {/* Date & Time */}
                <div className="datetime-col">
                  <span className="date">{match.date}</span>
                  <span className="time text-accent">{match.time}</span>
                </div>

                {/* Broadcast Channel */}
                <div className="channel-col">
                  <span className="channel-badge">
                    <Tv size={14} />
                    {match.channel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sports-section {
          background: linear-gradient(180deg, var(--bg-dark) 0%, #111419 100%);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .title-icon {
          display: inline-block;
          vertical-align: middle;
          margin-right: 12px;
          color: var(--accent);
          filter: drop-shadow(0 0 10px rgba(var(--accent-rgb), 0.3));
        }

        .scoreboard-container {
          background: #0f1115;
          border: 2px solid #222630;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg), inset 0 0 30px rgba(0, 0, 0, 0.8);
        }

        .scoreboard-header {
          background: #181c24;
          padding: 16px 24px;
          border-bottom: 2px solid #222630;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .scoreboard-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .scoreboard-led {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #ff4747;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.05em;
        }

        .scoreboard-led::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff4747;
          box-shadow: 0 0 8px #ff4747;
          display: inline-block;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .fixtures-list {
          padding: 12px 0;
        }

        .fixture-row {
          display: grid;
          grid-template-columns: 180px 1fr 240px 150px;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          transition: var(--transition-fast);
        }

        .fixture-row:last-child {
          border-bottom: none;
        }

        .fixture-row:hover {
          background: rgba(255, 255, 255, 0.015);
        }

        .comp-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .comp-badge.premier-league {
          background: rgba(56, 0, 60, 0.2);
          border: 1px solid #38003c;
          color: #ff2882;
        }

        .comp-badge.world-cup-qualifier {
          background: rgba(242, 174, 27, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
        }

        .teams-col {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
        }

        .team {
          color: var(--text-light);
        }

        .vs {
          font-size: 0.85rem;
          color: #ff4747;
          background: rgba(255, 71, 71, 0.1);
          border: 1px solid rgba(255, 71, 71, 0.2);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .datetime-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 40px;
        }

        .date {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .time {
          font-size: 0.85rem;
          font-weight: 700;
        }

        .channel-col {
          display: flex;
          justify-content: flex-end;
        }

        .channel-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 4px;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .fixture-row {
            grid-template-columns: 140px 1fr 120px;
            padding: 16px 20px;
          }
          .channel-col {
            display: none;
          }
          .datetime-col {
            padding-left: 20px;
            align-items: flex-end;
          }
        }

        @media (max-width: 768px) {
          .fixture-row {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
            padding: 24px;
          }
          .datetime-col {
            padding-left: 0;
            align-items: center;
          }
          .teams-col {
            font-size: 1.1rem;
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}
