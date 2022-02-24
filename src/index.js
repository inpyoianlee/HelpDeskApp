// src/index.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import { CssBaseline } from '@mui/material';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from "react-router-dom";


const App = () => {
  return (
    <div id="App">
      <CssBaseline />
      <Header />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
