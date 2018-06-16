import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import About from '../components/About';
import StreetFighter from '../components/StreetFighter';

class Router extends Component {
    render() {
        return (
            (
                <Router history={hashHistory}>
                    <div>
                        <Route path={'/'} component={App} />
                        <Route path={'/about'} component={About} />
                    </div>
                </Router>
            ),
            getElementById('app')
        );
    }
}
