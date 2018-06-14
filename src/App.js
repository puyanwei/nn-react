import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <StreetFighter />
            </div>
        );
    }
}

class StreetFighter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                'Chun-Li',
                'Guile',
                'Ryu',
                'Ken',
                'E.Honda',
                'Dhalsim',
            ],
        };
    }

    render() {
        return (
            <div>
                <p>Street Fighter Characters</p>
                <ul style={{ textAlign: 'left' }}>
                    <li>{this.state.characters[0]}</li>
                    <li>{this.state.characters[1]}</li>
                    <li>{this.state.characters[2]}</li>
                    <li>{this.state.characters[3]}</li>
                    <li>{this.state.characters[4]}</li>
                </ul>
            </div>
        );
    }
}

export default App;
