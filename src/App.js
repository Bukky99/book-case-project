import React, { useState } from 'react';
import data from './models/books.json';
import BookList from './components/BookList';

const App = (props) => {
  const [books, setBooks] = useState(data);
  //const [selectedBook, setSelectedBook] = useState(' ');

  function bookRemoved(title) {
    console.log(`The Book ${title} was removed`);
    const removedBook = books.filter((book) => {
      if (title !== book.volumeInfo.title) {
        return true;
      }
      return false;
    });
    setBooks(removedBook);
    //setBooks([...books.map((book) => {})]);
    //setSelectedBook(props.title);
  }
  return (
    <ul>
      <BookList books={books} bookRemoved={bookRemoved} stored="library" />
    </ul>
  );
};

export default App;
