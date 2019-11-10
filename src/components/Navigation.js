import React from 'react';

// Inside of Navigation.js import { Link } from 'react-router-dom'.
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">About</a>
        </div>
        <div>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
