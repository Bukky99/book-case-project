import React, { useState } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

const BookList = (props) => {
  const [page, setPage] = useState(1);
  const [booksOnShow, setBooksOnShow] = useState(props.books);

  function calculateBooksOnShow(books, currentPage) {
    setBooksOnShow(booksOnShow);
    {
      return books.slice(currentPage - 1, currentPage * 3);
    }
  }

  function onChange(event, pageNumber) {
    console.log(page);
    console.log(pageNumber);
    console.log(booksOnShow[1]);
    setPage(pageNumber);
    console.log(props.books);
    setBooksOnShow();
  }

  return (
    <div>
      <div>
        {props.books.map((book) => (
          <Book key={book.id} book={book} bookRemoved={props.bookRemoved} />
        ))}
        <Pagination
          page={page}
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
