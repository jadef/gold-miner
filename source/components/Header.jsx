import React from 'react';

// -- Components
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return <header>
      <div className="wrapper">
        <Logo />
        <section className="intro">
          <h2>Picking Technologies</h2>
          <p>Always keep learning. <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae gravida enim. Integer eget odio pellentesque, aliquam sapien quis, aliquam mauris. Etiam a volutpat magna.</span></p>
        </section>
        <div className="totop">
          To Top
        </div>
      </div>
    </header>;
  }
}

export default Header;
