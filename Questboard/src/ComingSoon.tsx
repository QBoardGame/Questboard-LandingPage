import React from 'react';
import { useNavigate } from 'react-router-dom';

function ComingSoon() {
  const navigate = useNavigate();

  return (
    <main className="page-shell coming-soon-page">
      <section className="coming-soon-content">
        <div className="coming-soon-inner">
          <span className="eyebrow">Questboard</span>
          <h1>Coming Soon</h1>
          <p className="lede">
            We're preparing something amazing for you. Questboard Desktop is on its way.
          </p>
          <p className="coming-soon-subtext">
            Be the first to know when it launches. Stay tuned for updates.
          </p>
          <button className="button button-primary" onClick={() => navigate('/')}>
            Back to home
          </button>
        </div>
      </section>
    </main>
  );
}

export default ComingSoon;
