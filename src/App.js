import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import data from './models/books.json';
import BookList from './components/BookList';
import Header from './components/Header';
import Search from './components/Search';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Redirect } from 'react-router-dom'

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');

  async function findBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
pe=books&projection=lite`,
    ).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

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
    <BrowserRouter>
      <Route
        exact
        path="/about"
        render={() => (
          <React.Fragment>
            <About />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Header />
            <Search
              findBooks={findBooks}
              keyword={keyword}
              setKeyword={setKeyword}
            />
            <BookList
              books={books}
              bookRemoved={bookRemoved}
              stored="library"
            />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/bookcase"
        render={() => (
          <React.Fragment>
            <BookList
              books={books}
              bookRemoved={bookRemoved}
              stored="library"
            />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
