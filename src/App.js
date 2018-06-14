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
        let characters = this.state.characters;
        characters = characters.map((char, index) => {
            return <Character char={char} key={index} />;
        });
        return (
            <div>
                <p>Street Fighter Characters</p>
                <ul>{characters}</ul>
            </div>
        );
    }
}

class Character extends Component {
    render() {
        return (
            <li>
                <div className="character">
                    <span className="characterName">{this.props.char}</span>
                </div>
            </li>
        );
    }
}

export default App;
