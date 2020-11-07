import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-pagination';

const BookList = (props) => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <div>
        <h1>Books Added to wish List</h1>
        {props.books.map((book) => (
          <Book key={book.id} book={book} bookRemoved={props.bookRemoved} />
        ))}
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={() => {}}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default BookList;
