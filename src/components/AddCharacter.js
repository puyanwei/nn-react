import React from 'react';
import { render } from 'react-dom';

import '../css/add-character.css';

class AddCharacter extends React.Component {
    render() {
        return (
            <form id="add-character" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a character"
                    ref="newCharacter"
                    required
                />
                <input type="submit" value="submit" />
            </form>
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.refs.newCharacter.value);
        this.refs.newCharacter.value = '';
    };
}

export default AddCharacter;
