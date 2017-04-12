import React from 'react';
import { render } from 'react-dom';

import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const hashHistory = createBrowserHistory();

// ----
import App from './components/app';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>), document.getElementById('root')
);
