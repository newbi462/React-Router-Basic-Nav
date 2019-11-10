import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

// Inside of your App.js file import { Route } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />

    <Route exsact path="/"/ component={Home} />
    <Route path="/about"/ component={About} />
    <Route path="/contact"/ component={Contact} />
  </div>
);

export default App;
