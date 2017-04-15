import React from 'react';

// -- Components
import Rating from './Rating';
import Tags from './Tags';

class Entry extends React.Component {
  render() {
    const entry = this.props.entry;

    return (
      <section className="entry">
        <div className="title" id={entry.id}>
          <h3>{entry.title}</h3>
          {entry.link ? <a className="external" href={entry.link} target="_blank"><img src="images/external.svg" alt="external link" /></a> : null}
        </div>
        <Rating rank={entry.rank} />
        <div className="desc">
          <div className="content">
            {entry.content}
            <hr />
            {entry.notes}
          </div>
          {/*<Tags tags={entry.tags} />*/}
        </div>
        <div className="stamp">edited: 2017/03/28</div>
      </section>
    );
  }
}

export default Entry;
