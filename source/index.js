import React from 'react';
import { render } from 'react-dom';

window.React = React;

import App from './components/App';

render(
  <App />,
  document.getElementById('root')
);
