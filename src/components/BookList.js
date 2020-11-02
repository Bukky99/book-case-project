import React from 'react';
import Book from './Book';

const BookList = (props) => {
  return (
    <div>
      {props.books.map((book) => (
        <Book key={book.id} book={book} bookRemoved={props.bookRemoved} />
      ))}
    </div>
  );
};

export default BookList;
