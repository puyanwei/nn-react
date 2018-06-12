import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToDoComponent></ToDoComponent>
            </div>
        );
    }
}

class ToDoComponent extends Component {
    render(){
        return(
            <h1>hello world</h1>
        );
    }
}﻿


export default App;
