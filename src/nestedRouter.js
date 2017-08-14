import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const NestedExample = () => (
    <Router>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <Route path="/" component={Home} />
    </div>
       
    </Router>
);

const Home = () => (
    <div>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={AllMessage}/>
        </Switch>    
    </div>
);

const About = () => (
    <h2>About</h2>
);

const Contact = () => (
    <h2>Contact</h2>
);

const AllMessage = () => (
    <h2>AllMessage</h2>
);

export default NestedExample;