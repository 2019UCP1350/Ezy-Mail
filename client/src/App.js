import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import EmailPage from "./screens/EmailPage";
import Emailcompose from "./screens/Emailcompose";
import History from "./screens/History";
import Aboutus from "./screens/Aboutus";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={EmailPage} />
        <Route exact path="/compose" component={Emailcompose} />
        <Route exact path="/history" component={History} />
        <Route exact path="/aboutus" component={Aboutus} />

      </Switch>
    </Router>
  );
}
