import React from 'react';

export const Header = () => {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Konstantine899/Showecase"
              rel="noreferrer"
              target="_blank"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
