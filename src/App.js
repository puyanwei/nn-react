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
            return (
                <Character char={char} key={index} onDelete={this.onDelete.bind} />
            );
        });
        return (
            <div>
                <p>Street Fighter Characters</p>
                <ul>{characters}</ul>
            </div>
        );
    }
    onDelete(chosenCharacter) {
        let updatedCharactersList = this.state.characters.filter(
            (char, index) => {
                return chosenCharacter !== char;
            }
        );
        // setState is like vuex mutation
        this.setState({
            characters: updatedCharactersList,
        });
    }
}

class Character extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
    }
    render() {
        return (
            <li>
                <div className="character">
                    <span className="character-name">{this.props.char}</span>
                    <span
                        className="character-delete"
                        onClick={this.handleDelete}
                        > x </span>
                </div>
            </li>
        )
    };

    handleDelete() {
        this.props.onDelete(this.props.char);
    }
}


export default App;
