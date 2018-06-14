import React, { Component } from 'react';
import './App.css';

import Character from './components/Character'
import StreetFighter from './components/StreetFighter'

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
