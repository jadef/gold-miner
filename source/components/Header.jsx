import React from 'react';

// -- Components
import Logo from './header/Logo';
import Intro from './header/Intro';
import ToTop from './header/ToTop';

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
