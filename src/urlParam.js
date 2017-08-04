import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ParamsExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/netflix">NetFlix</Link>
                </li>
                <li>
                    <Link to="/zillow-group">Zillow Group</Link>
                </li>
                <li>
                    <Link to="/yahoo">Yahoo</Link>
                </li>
                <li>
                    <Link to="/modus-create">Modus Create</Link>
                </li>
            </ul>

            <Route path="/:id" component={Child} />
        </div>
    </Router>
)

const Child = ({match}) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)

export default ParamsExample;