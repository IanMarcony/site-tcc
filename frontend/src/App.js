import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import HomePage from "./views/HomePage";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
