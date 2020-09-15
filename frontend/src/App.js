import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import HomePage from "./views/LoginPage";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
}

export default App;
