import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Bundle from './Bundle';

const Home = () => <h3>Home</h3>;

const About = (props) => (
    <Bundle load={() => import('./About')}>
        {(About) => <About {...props} />}
    </Bundle>
);

const Dashboard = (props) => (
  <Bundle load={() => import('./Dashboard')}>
    {(Dashboard) => <Dashboard {...props}/>}
  </Bundle>
);

class CodeSplittingExample extends Component {

    render() {
        return (
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
                            <Link to="/Dashboard">dashboard</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
           
        );
    }
}

export default CodeSplittingExample;