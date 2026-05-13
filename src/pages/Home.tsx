import React from 'react';
import { Link } from 'react-router-dom';

const metrics = [
  { value: '24/7', label: 'Live planning' },
  { value: '128+', label: 'Projects tracked' },
  { value: '98%', label: 'On-time delivery' },
];

const features = [
  'Plan work in clear, visual lanes.',
  'Keep every task, note, and owner in one place.',
  'Spot blockers early with real-time progress signals.',
];

const supportedGames = [
  'Valorant',
  'CS2',
  'Fortnite',
  'Dota',
  'League of Legends',
  'COD Modern Warfare',
  'COD Warzone',
  'Rocket League',
  'COD Back Ops',
  'Fall Guys',
  'Halo',
  'Overwatch',
];

const featureCards = [
  {
    title: 'Smart Match Tracking',
    description: 'Auto-detect matches and performance.',
  },
  {
    title: 'Daily Challenges',
    description: 'Get missions based on your games.',
  },
  {
    title: 'Leaderboards',
    description: 'Compete with friends and the community.',
  },
  {
    title: 'Rewards Marketplace',
    description: 'Redeem coins for gaming perks.',
  },
];

function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Questboard</span>
          <h1>Create. Compete. Conquer.</h1>
          <p className="lede">
            Track matches, complete challenges, earn rewards, and climb leaderboards—across your favorite games.
          </p>

          <div className="cta-row">
            <Link to="/coming-soon" className="button button-primary">
              Download Questboard Desktop&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 9.04313V0H0.956873C0.428407 0 0 0.428406 0 0.956873C0 1.48534 0.428407 1.91375 0.956873 1.91375L6.73303 1.91375L0.280262 8.36652C-0.0934205 8.7402 -0.0934202 9.34606 0.280262 9.71974C0.653945 10.0934 1.2598 10.0934 1.63349 9.71974L8.08625 3.26697V9.04313C8.08625 9.57159 8.51466 10 9.04313 10C9.57159 10 10 9.57159 10 9.04313Z"
                  fill="#000"
                ></path>
              </svg>
            </Link>
            <a className="button button-secondary" href="#features">
              Watch Demo
            </a>
          </div>

          <ul className="metrics" aria-label="Product metrics">
            {metrics.map((metric) => (
              <li key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <section className="how-it-works" id="how-it-works" aria-label="How it works">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>Get started in three simple steps</h2>
          </div>

          <ol className="how-steps">
            <li className="how-step">
              <h3>1. Connect Your Games</h3>
              <p>Sync your accounts instantly.</p>
            </li>

            <li className="how-step">
              <h3>2. Complete Missions</h3>
              <p>Daily quests, ranked challenges, win streaks.</p>
            </li>

            <li className="how-step">
              <h3>3. Earn Rewards</h3>
              <p>Coins, skins, gift cards, exclusive drops.</p>
            </li>
          </ol>
        </section>
      </section>

      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="eyebrow">Features</span>
          <h2>Everything Questboard does <br/> In one glance.</h2>
        </div>

        <div className="features-grid">
          {featureCards.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="supported-games" id="games">
        <div className="section-heading">
          <span className="eyebrow">Supported Games</span>
          <h2>Play What You Love.<br/>Get Rewarded Anyway.</h2>
        </div>

        <div className="games-grid">
          {supportedGames.map((game) => (
            <div key={game} className="game-card">
              {game}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <span className="eyebrow">Get started</span>
          <h2>Launch a sharper planning experience for your team.</h2>
        </div>
        <a className="button button-primary" href="mailto:hello@questboard.app">
          hello@questboard.app
        </a>
      </section>
    </main>
  );
}

export default Home;
