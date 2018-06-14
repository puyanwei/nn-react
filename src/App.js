import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToDoComponent msg="ello ello ello" chracter={ streetFighter } />
            </div>
        );
    }
}

class ToDoComponent extends Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <h1>And what a world this is!</h1>
                <p>{this.props.msg}</p>
                <p>
                    You have chosen {streetFighter.name} from { streetFighter.country } who's special move is { streetFighter.special }
                </p>
            </div>
        );
    }
}

let streetFighter = {
    name: 'Chun-Li',
    country: 'China',
    special: 'Spinning Bird Kick',
};

export default App;
