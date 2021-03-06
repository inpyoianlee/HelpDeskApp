// src/index.js

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Header, useStyles, Dashboard } from "./components";
import { CssBaseline, 
  Typography, 
  Container, 
  Grid, 
  CardMedia
} from "@mui/material";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const classes = useStyles();
  const [loggedIn, setLoggedin] = useState(false);

  return (
    <div id="App">
      <CssBaseline />
      <Header />
      <Switch>
        <Route path="/aboutus">
          <Typography variant="h2">
            ABOUT US IN PROGRESS
          </Typography>
        </Route>
        <Route path="/login">
          <Typography variant="h2">
            LOGIN IN PROGRESS
          </Typography>
        </Route>
        <Route path="/signup">
          <Typography variant="h2">
            SIGNUP IN PROGRESS
          </Typography>
        </Route>
        <Route path="/">
          <Container>
            <Typography className={classes.welcomeLine} variant="h2" align="center">
              Creating an intuitive Help Desk application for your company
            </Typography>
          </Container>
          <CardMedia
            component="img" 
            src="./img/krakenimages-376KN_ISplE-unsplash.jpg"
          />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
