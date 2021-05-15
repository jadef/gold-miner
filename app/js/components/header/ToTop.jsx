import React from 'react';

// -- Styles
import '../../../sass/components/header/totop.scss';

/* -- Hierarchy
  - App
    - Header
      - Logo
      - Intro
      - *ToTop*
*/

class ToTop extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <a className="totop" href="#root" onClick={this.handleClick}>to top</a>
    );
  }
}

export default ToTop;
