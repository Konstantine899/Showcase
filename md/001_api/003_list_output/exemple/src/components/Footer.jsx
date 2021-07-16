import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer green  lighten-4">
      <div className="footer-copyright">
        <div className="container">
          {new Date().getFullYear()} Copyright Text
          <a href="#!" className="gray-text text-lighten-4 right">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};
