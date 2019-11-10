import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

// Inside of your App.js file import { Route } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
  </div>
);

export default App;
