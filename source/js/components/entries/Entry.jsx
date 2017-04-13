import React from 'react';

// -- Components
import Rating from './Rating';
import Tags from './Tags';

class Entry extends React.Component {
  render() {
    return <section className="entry">
        <div className="title">
          <h3>Browserify</h3>
          <a className="external" href="#"><img src="images/external.svg" alt="external link" /></a>
        </div>
        <Rating />
        <div className="desc">
          <div className="content">
            <p>Collects JS modules (and script files) and mushes them all into a single app file. Often compared to requireJS.</p>
            <p>I guess it's similar to the way Node.js requires dependencies, but for compiling to the front end.</p>
          </div>
          <Tags />
        </div>
        <div className="stamp">edited: 2017/03/28</div>
      </section>;
  }
}

export default Entry;
