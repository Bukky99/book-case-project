import React, { useState } from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="searchKeyword">
        <Form.Label>Enter Search</Form.Label>
        <Form.Control
          type="keyword"
          placeholder="Enter keyword"
          value={props.keyword}
          onChange={(e) => {
            props.setKeyword(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Search;
