import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        return (
            <section role="presentation" className="Hero elevation-3dp">
                <div className="welcome elevation-1dp">
                    <h1>I am a Polyglot Developer. I write APIs and Web Applications.</h1>
                </div>
            </section>
        );
    }
}

export default Hero;
