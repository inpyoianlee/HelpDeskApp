// src/index.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Header, useStyles, Dashboard} from './components'
import { CssBaseline, Typography, Grid } from '@mui/material';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from "react-router-dom";


const App = () => {
  const classes = useStyles();
  return (
    <div id="App">
      <CssBaseline />
      <Header />
      <Typography className={classes.welcomeLine} variant='h4' align='center'>
        Time to take care of some unresolved help tickets bucko
      </Typography>
      <Dashboard />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
