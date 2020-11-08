import React from 'react';
import { Link } from 'react-router-dom';

//import Book from './Book';
//import Pagination from '@material-ui/lab/Pagination';

const BookWishList = (props) => {
  return (
    <div>
      <div>
        <Link to="/"> Home |</Link>
        <Link to="/search"> Search </Link>
        <h1> Book Wish List</h1>
        <h5>Books added to your wish list.</h5>
        <div className="addedBooks"> {props.books}</div>
      </div>
    </div>
  );
};

export default BookWishList;
