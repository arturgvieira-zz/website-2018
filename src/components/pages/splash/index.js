import React, { Component } from 'react';
import './splash.css';
import stack from './resources/stack_1200.png';
import linkedin from './resources/linkedin.png';
import github from './resources/github.png';
import twitter from './resources/twitter.png';
// Components
import Hero from './components/hero';

class Splash extends Component {
    render = () => {
        return (
            <div className="Splash page">
                <Hero />
                <section className="splash-main-content">
                    <article className="headings">
                        <h3>This is my current professional technology stack.
                            These are technologies which I am familiar with 
                            and use day to day to build servers, clients
                            or both. 
                        </h3>
                        <img
                            src={stack}
                            className="splash-main-image"
                            alt="Professional Knowledge"
                        />
                    </article>
                </section>
                <section className="splash-content-container">
                    <article className="content">
                        <h3>I started with Java.</h3>
                        <p>
                            Java is considered both a simple and powerful
                            programming language. I chose to learn Java in 2009
                            because at the time I was gearing up to start
                            college.
                        </p>
                        <p>
                            It was the language of choice for most of the
                            academic programs which I was interested in. I fell
                            in love with the simple syntax and comprehensive
                            language API documentation.
                        </p>
                        <p>
                            I got my first job as a software developer as a 
                            sophomore in college with a Fortune 500 company.
                        </p>
                        <p>
                            Soon after building my first API I started to look
                            for another language to work with. One that allowed
                            me to program for the web. I chose JavaScript and
                            started to build web solutions that have rich user
                            interfaces. It is what I enjoy doing the most.
                        </p>
                    </article>
                    <article className="content">
                        <h3>Along the way I found JavaScript.</h3>
                        <p>
                            It changed how I approached problems, it changed me
                            as a developer. It's the language with the most
                            activity today, the language of the web.
                        </p>
                        <p>
                            I started using JavaScript in 2012 when I needed a
                            user interface component to process JSON, that was
                            when I started using jQuery and it's AJAX function.
                            Once I knew more about JavaScript I started to keep
                            a set of frameworks which I used day to day.
                            Although I use React JS today for most of my user
                            interface needs, I have used a wide selection of the
                            available MVC frameworks.
                        </p>
                        <p>
                            I am experienced with Angular
                            and KnockoutJS as well as jQuery. Although I have
                            experience with these other libraries I prefer to
                            use ReactJS, in a NodeJS development environment.
                        </p>
                    </article>
                    <article className="content">
                        <h3>Currently, I have been developing GraphQL APIs.</h3>
                        <p>
                            In 2017 I started to learn about a new API spec. 
                            GraphQL is an API specification designed by Facebook.
                            I have used GraphQL, now for some time to build server
                            APIs. It is very well suited for progressive applications.
                        </p>
                        <p>
                            I use Apollo Server / Client to design and develop these GraphQL
                            Web Applications.
                        </p>
                        <p>
                            I prefer GraphQL over REST based APIs, this is due to the
                            great improvement that GraphQL APIs pose in the development
                            of scalable and maintainable servers.
                        </p>
                        <p>
                            GraphQL APIs come with the best features of REST built into the
                            specification and provide the developer the ability to focus on 
                            the domain requirements.
                        </p>
                    </article>
                </section>
                <section class="filler content">
                    <h3>I follow the standards,</h3>
                    <p>where there are any and design patterns or best practices otherwise. Also, I try to write only the necessary parts and use appropriate technological tools for the job. By using the right language and API for example.</p>
                    <h3> ... and also enjoy innovation.</h3>
                    <p>I prefer functional programming paradigms to object-oriented or procedural designs. I tend to use functional design patterns and stateful and immutable data objects via pure functions. Where appropriate I prefer to develop using test-driven development methods. When available, I perform best, in an Agile and iterative development team.</p>
                </section>
                <section className="filler">
                    <h3>I am currently looking for new opportunities.</h3>
                    <h3>
                        <a href="mailto:contact@arturgvieira.com">
                            contact@arturgvieira.com
                        </a>
                    </h3>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/arturgvieira/">
                            <img
                                className="img"
                                src={linkedin}
                                alt="https://www.linkedin.com/in/arturgvieira/"
                            />
                        </a>
                        <a href="https://github.com/arturgvieira">
                            <img
                                className="img"
                                src={github}
                                alt="https://github.com/arturgvieira"
                            />
                        </a>
                        <a href="https://twitter.com/artur_g_vieira">
                            <img
                                className="img"
                                src={twitter}
                                alt="https://twitter.com/artur_g_vieira"
                            />
                        </a>
                    </div>
                </section>
            </div>
        );
    };
}

export default Splash;
