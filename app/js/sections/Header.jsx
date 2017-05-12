import React from 'react';

// -- Components
import Logo from '../components/header/Logo';
import Intro from '../components/header/Intro';
import ToTop from '../components/header/ToTop';

// -- Styles
import '../../sass/sections/header.scss';

/* -- Hierarchy
  - App
    - *Header*
      - Logo
      - Intro
      - ToTop
*/

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topHeight: "",
      scrollClass: "",
      transitionPoint: ""
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let heightCheck = Math.max(72, 250 - scrollTop);
    const compactPoint = 200;
    const transitionPoint = 150;

    // Set the various states
    this.setState({topHeight: heightCheck});
    if (heightCheck <= compactPoint) {
      if (heightCheck <= transitionPoint) {
        this.setState({scrollClass: "compact transition"});
      } else {
        this.setState({scrollClass: "compact"});
      }
    } else {
      this.setState({scrollClass: ""});
    }
  }

  render() {
    return (
      <header style={{height: this.state.topHeight + "px"}} className={this.state.scrollClass}>
        <div className="wrapper">
          <Logo />
          <Intro />
          <ToTop />
        </div>
      </header>
    );
  }
}

export default Header;
