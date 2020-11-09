import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import data from './models/books.json';
import BookList from './components/BookList';
import Header from './components/Header';
import Search from './components/Search';
import About from './pages/About';
import BookWishList from './pages/BookWishList';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '@material-ui/lab/Pagination';
//import {Redirect } from 'react-router-dom'

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

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
        path="/"
        render={() => (
          <React.Fragment>
            <About />
            <Button number={props.number} />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/search"
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
        path="/bookwishlist"
        render={() => (
          <React.Fragment>
            <BookWishList />
            <Pagination page={page} setpage={setPage} />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
