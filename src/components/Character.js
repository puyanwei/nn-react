import React from 'react';

import '../css/character.css';

class Character extends React.Component {
    render() {
        return (
            <li>
                <div className="character">
                    <span className="character-name">{this.props.char}</span>
                    <span
                        className="character-delete"
                        onClick={this.handleDelete}
                    >
                        {' '}
                        x
                    </span>
                </div>
            </li>
        );
    }

    handleDelete = () => {
        this.props.onDelete(this.props.char);
    };
}

export default Character;
