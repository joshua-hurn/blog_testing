import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FrontPage from './frontpage';
import Jumbotron from './jumbotron';
import BlogInput from './blogInput';
import SingleBlog from './singleBlog';
import css from '../styles/styles.css';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Jumbotron />
                    <BlogInput />
                    <Switch>
                        <Route exact path="/" component={FrontPage} />
                        <Route exact path="/single/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;