import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render = () => {
        return (
            <div className="Header">
                <header role="presentation">
                    <article className="branding">
                        <h2>Artur Gil Valente Vieira</h2>
                    </article>
                    <div>
                        <h3 className="heading">Online Resume</h3>
                    </div>
                </header>
            </div>
        );
    };
}

export default Header;
