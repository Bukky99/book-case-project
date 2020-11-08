import React, { useState } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

const BookList = (props) => {
  const [page, setPage] = useState(1);
  const [booksOnShow, setBooksOnShow] = useState(5);

  function calculateBooksOnShow(books, currentPage) {
    return books.slice(currentPage - 1, currentPage * 4);
  }

  function onChange(event, pageNumber) {
    console.log(page);
    console.log(pageNumber);
    console.log('-----');
    setPage(pageNumber);
    setBooksOnShow(booksOnShow);
    console.log(booksOnShow);
  }

  return (
    <div>
      <div>
        {props.books.map((book) => (
          <Book
            key={book.id}
            book={book}
            bookRemoved={props.bookRemoved}
            booksOnShow={booksOnShow}
          />
        ))}
        <Pagination
          page={page}
          //calculateBooksOnShow={calculateBooksOnShow}
          onChange={onChange}
          count={Math.ceil(props.books.length / 5)}
          color="secondary"
          showFirstButton
          showLastButton
        />{' '}
        <Typography>Page: {page}</Typography>
      </div>
    </div>
  );
};

export default BookList;
