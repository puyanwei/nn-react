import React from 'react';

import './App.css';
// import Router from './routes/router';
import StreetFighter from './components/StreetFighter';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <StreetFighter />
            </div>
        );
    }
}

export default App;
