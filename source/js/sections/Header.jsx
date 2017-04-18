import React from 'react';

// -- Components
import Logo from '../components/header/Logo';
import Intro from '../components/header/Intro';
import ToTop from '../components/header/ToTop';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {topHeight: ""};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    let heightCheck = Math.max(72, 250 - scrollTop);
    this.setState({topHeight: heightCheck});
  }

  render() {
    return (
      <header id="pageTop" style={{height: this.state.topHeight + "px"}}>
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
