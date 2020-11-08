import React from 'react';
import PropTypes from 'prop-types';

/*const renderList = () => {
    const list = [];
    for(let i = 0; i < book.length; i++) {
        let {id, volumeInfo: {title, authors, description, imageLinks} } = books[i];
        list.push(<li id={books[i].id}>{title} - {authors.map(author => (author))}
        {imageLinks && imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail} />
    }</li>);
        return list;
    }
}*/

const Book = (props) => {
  //let let {id, volumeInfo: {title, authors, description}, saleInfo:{listPrice: {amount}}} = book;
  const info = props.book.volumeInfo;
  const {
    id,
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
  } = props.book;

  const renderAmount = () => {
    if (
      props.book.saleInfo &&
      props.book.saleInfo.listPrice &&
      props.book.saleInfo.listPrice.amount
    ) {
      return '£' + props.book.saleInfo.listPrice.amount;
    }
    return;
  };

  const renderAuthors = () => {
    if (authors && authors.length === 1) {
      return authors;
    }
    return authors.map((author) => author + ', ');
  };

  return (
    <div className="book">
      <img src={thumbnail} />
      <h2>
        {title} - {renderAuthors()}{' '}
      </h2>
      <p>{renderAmount()}</p>
      <p>{description}</p>
      <button id="addBtn" onClick={() => props.bookRemoved(title)}>
        Add +{' '}
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }),
    }),
    saleInfo: PropTypes.shape({
      listPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }),
};

Book.defultProps = {
  title: 'This is the Title',
};

export default Book;
