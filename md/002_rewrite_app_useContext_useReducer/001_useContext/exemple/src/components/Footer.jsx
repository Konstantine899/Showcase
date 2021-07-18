import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer green  lighten-4">
      <div className="footer-copyright">
        <div className="container">
          {new Date().getFullYear()} Copyright Text
          <a
            href="https://github.com/Konstantine899/Showecase"
            className="gray-text text-lighten-4 right"
            rel="noreferrer"
            target="_blank"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};
