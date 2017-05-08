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

    function currentYPosition() {
      if (self.pageYOffset) return self.pageYOffset;
      return 0;
    }

    function smoothScroll() {
      let startY = currentYPosition();
      const stopY = 0;
      let distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
          scrollTo(0, stopY); return;
      }
      let speed = Math.round(distance / 100);
      if (speed >= 20) speed = 20;
      let step = Math.round(distance / 25);
      let leapY = stopY > startY ? startY + step : startY - step;
      let timer = 0;
      if (stopY > startY) {
        for ( let i=startY; i<stopY; i+=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
      }
      for ( let i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }
    }

    smoothScroll();
  }

  render() {
    return (
      <a className="totop" href="#root" onClick={this.handleClick}>to top</a>
    );
  }
}

export default ToTop;
