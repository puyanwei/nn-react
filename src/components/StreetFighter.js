import React, { Component } from 'react';
import Character from './Character'
import '../css/street-fighter.css';


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
                <Character char={char} key={index} onDelete={this.onDelete} />
            );
        });
        return (
            <div className="sf-wrapper">
                <p>Street Fighter Characters</p>
                <ul>{characters}</ul>
            </div>
        );
    }
    onDelete = (chosenCharacter) => {
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

export default StreetFighter;
