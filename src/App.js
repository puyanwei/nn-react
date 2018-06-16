import React, { Component } from 'react';
import './App.css';
import StreetFighter from './components/StreetFighter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <StreetFighter />
            </div>
        );
    }
}

export default App;
