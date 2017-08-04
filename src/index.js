import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './App';
import ParamsExample from './urlParam';
import CustomLinkExample from './customLink';
import PreventingTransitionsExample from './prenentingTransitions';
import NoMatchExample from './noMatch';
import RecursiveExample from './recursivePaths';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecursiveExample/>, document.getElementById('root'));
registerServiceWorker();
