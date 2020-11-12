import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./Pages/About";
import Options from "./Pages/Options";
import Home from "./Pages/Home";
import history from './misc/history';

export default class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			config: props.config,
        };
	}
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact 
                        render={() => <Home config={this.state.config} />} />
                    <Route path="/About" 
                        render={() => <About config={this.state.config} />} />
                    <Route path="/Options" 
                        render={() => <Options config={this.state.config} />} />
                </Switch>
            </Router>
        )
    }
}