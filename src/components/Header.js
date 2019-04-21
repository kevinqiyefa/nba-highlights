import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flexbox-container">
      <Link to="/" className="logo">
        <span />
      </Link>
      <nav>
        <Link to="/teams">Teams</Link>
      </nav>
    </header>
  );
};

export default Header;
