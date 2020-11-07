import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="aboutHeader">
      <h1>Welcome to the Bookcase Application</h1>
      <div className="breadcrumb">
        <Link to="/bookcase"> Bookcase |</Link>
        <Link to="/"> Home |</Link>
      </div>
      <div className="aboutDescription">
        <p>
          This following aaplication was created by Bukky Omojowo. This bookcase
          app displays a list of books that a user can add to a local bookcase.
        </p>
        <p>
          Click on the "Add" + button to add a book to your bookcase. Use the
          search bar to find the latest books by name, author or description.
        </p>
      </div>
    </div>
  );
};

export default About;
