import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const hashHistory = createBrowserHistory();

// ----
import App from './components/app';
import About from './components/about';
import PoweredBy from './components/powered-by';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('root')
);
