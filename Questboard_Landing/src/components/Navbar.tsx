import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-text">QBoard</span>
        </div>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#games">Games</a>
          <a href="#features">Features</a>
          <a href="#rewards">Rewards</a>
          <a href="#community">Community</a>
          <Link to="/coming-soon">Download</Link>
          <a href="#signin">Sign In</a>
          <a className="button button-primary cta" href="#get-started">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
