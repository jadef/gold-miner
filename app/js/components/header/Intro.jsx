import React from 'react';

// -- Styles
import '../../../sass/components/header/intro.scss';

// -- Data
import { projectName, intro  } from '../../data/app.json'

/* -- Hierarchy
  - App
    - Header
      - Logo
      - *Intro*
      - ToTop
*/

class Intro extends React.Component {
  render() {
    return <section className="intro">
          <h2>{ projectName }</h2>
          <p>{ intro.callout } <span>{ intro.expanded }</span></p>
        </section>;
  }
}

export default Intro;
