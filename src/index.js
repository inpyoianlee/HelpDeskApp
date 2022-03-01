// src/index.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Header, useStyles, Dashboard} from './components'
import { CssBaseline, Typography, Container } from '@mui/material';

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
      <Container>
        
        <Typography className={classes.welcomeLine} variant='h2' align='center'>
          Creating an intuitive Help Desk application for your company
        </Typography>

      </Container>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
