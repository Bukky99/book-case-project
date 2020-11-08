import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/"> Home | </Link>
      <Link to="/search"> Search | </Link>
      <Link to="/bookwishlist" className="bookLink">
        Book Wish List
      </Link>
    </div>
  );
};

export default Header;
