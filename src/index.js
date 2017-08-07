import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './App';
import ParamsExample from './urlParam';
import CustomLinkExample from './customLink';
import PreventingTransitionsExample from './prenentingTransitions';
import NoMatchExample from './noMatch';
import RecursiveExample from './recursivePaths';
import SidebarExample from './sidebar';
import AnimationExample from './animatedTransitions';
import AmbiguousExample from './ambiguousMatches';
import RouteConfigExample from './routeConfig';
import ModalGallery from './modalGallery';
import StaticRouterExample from './staticRouterContext';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StaticRouterExample/>, document.getElementById('root'));
registerServiceWorker();
