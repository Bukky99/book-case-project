import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/about"> About |</Link>
      <Link to="/"> Home |</Link>
      <Link to="/bookcase" className="bookLink">
        Bookcase
      </Link>
    </div>
  );
};

export default Header;
