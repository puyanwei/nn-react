import React, { Component } from 'react';

class AddCharacter extends Component {
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
        console.log(this.refs.newCharacter.value);
    };
}

export default AddCharacter;
