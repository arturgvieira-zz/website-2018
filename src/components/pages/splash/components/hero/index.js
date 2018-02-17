import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        return (
            <section role="presentation" className="Hero elevation-2dp">
                <div className="welcome">
                    <h1>Welcome</h1>
                </div>
                <div className="portrait" />
            </section>
        );
    }
}

export default Hero;
