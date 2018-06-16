import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div className="About">
                <Link to={'/'}>Homepage</Link>
                <h2>This website is a list of street fighter characters!</h2>
            </div>
        );
    }
}

export default About;
