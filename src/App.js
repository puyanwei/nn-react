import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StreetFighter from './components/StreetFighter';
import About from './components/About';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={StreetFighter} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
