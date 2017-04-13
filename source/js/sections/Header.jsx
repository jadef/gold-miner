import React from 'react';

// -- Components
import Logo from '../components/header/Logo';
import Intro from '../components/header/Intro';
import ToTop from '../components/header/ToTop';

class Header extends React.Component {
  render() {
    return <header>
      <div className="wrapper">
        <Logo />
        <Intro />
        <ToTop />
      </div>
    </header>;
  }
}

export default Header;
