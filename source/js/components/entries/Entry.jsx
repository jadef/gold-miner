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
            <div className="notes">{entry.notes}</div>
            <div dangerouslySetInnerHTML={ {__html: entry.content} } />
          </div>
          {/*<Tags tags={entry.tags} />*/}
        </div>
        <div className="stamp">edited: {entry.stamp}</div>
      </section>
    );
  }
}

export default Entry;
