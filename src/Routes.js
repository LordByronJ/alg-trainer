import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./Pages/About";
import Options from "./Pages/Options";
import Home from "./Pages/Home";
import history from './misc/history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Options" component={Options} />
                </Switch>
            </Router>
        )
    }
}