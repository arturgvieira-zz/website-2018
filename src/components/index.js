import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css';
// Components
import Header from './header';
import Splash from './pages/splash';

export default class Main extends Component {
    state = {};

    componentDidCatch = (error, info) => {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.error(error, info);
        console.error(info.componentStack);
    };

    warningBanner = () => (
        <div className="error">Sorry, something went wrong.</div>
    );

    render = () => {
        return (
            <Router>
                <div className="Main">
                    {this.state.hasError && this.warningBanner()}
                    <Header />
                    <Route exact path="/" component={() => <Splash />} />
                </div>
            </Router>
        );
    };
}
