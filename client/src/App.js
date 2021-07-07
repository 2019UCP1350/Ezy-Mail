import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import EmailPage from "./screens/EmailPage";
import Emailcompose from "./screens/Emailcompose";
import History from "./screens/History";
import Aboutus from "./screens/Aboutus";
import ProtectedRoutes from "./components/protectedRoutes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" >
          <ProtectedRoutes Component={EmailPage} />
        </Route>
        <Route exact path="/compose" >
          <ProtectedRoutes Component={Emailcompose} />
        </Route>
        <Route exact path="/history"  >
          <ProtectedRoutes Component={History} />
        </Route>
        <Route exact path="/aboutus" component={Aboutus} />

      </Switch>
    </Router>
  );
}
