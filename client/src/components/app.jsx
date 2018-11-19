import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./auth/login";
import Logout from "./auth/logout";
import FrontPage from "./frontpage";
import Jumbotron from "./jumbotron";
import BlogInput from "./blogInput";
import SingleBlog from "./singleBlog";
import Navbar from "./Navbar";
import css from "../styles/styles.css";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/post" component={BlogInput} />
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/single/:id" component={SingleBlog} />
            <PrivateRoute exact path="/compose" component={BlogInput} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Navigation;
