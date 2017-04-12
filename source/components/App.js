import React from 'react';
import { Link } from 'react-router-dom';
import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    Welcome!
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
