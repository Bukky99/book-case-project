import { TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const Button = () => {
  const animal = ['dog', 'cat', 'bird'];
  const [number, setNumber] = useState(['']);

  return (
    <div>
      <p>{number}</p>
      <input type="text" />
      <button onClick={() => setNumber(number)}>save</button>
    </div>
  );
};

export default Button;
