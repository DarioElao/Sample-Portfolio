import React from 'react';

function Header() {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand">Your Logo or Name</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;