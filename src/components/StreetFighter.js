import React from 'react';
import { Link } from 'react-router-dom';

import Character from './Character';
import AddCharacter from './AddCharacter';

import '../css/street-fighter.css';

class StreetFighter extends React.Component {
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
            <div id="sf-wrapper">
                <Link to={'/about'}>About</Link>
                <p>Street Fighter Characters</p>
                <ul>{characters}</ul>
                <AddCharacter onAdd={this.onAdd} />
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
    };
    onAdd = (newCharacter) => {
        let updatedCharactersList = this.state.characters;
        updatedCharactersList.push(newCharacter);
        this.setState({
            characters: updatedCharactersList,
        });
    };
}

export default StreetFighter;
