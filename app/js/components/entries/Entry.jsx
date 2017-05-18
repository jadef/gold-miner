import React from 'react';
import PropTypes from 'prop-types';

// -- Components
import Rating from './Rating';
import Tags from './Tags';

// -- Styles
import '../../../sass/components/entries/entry.scss';

/* -- Hierarchy
  - App
    - Main
      - Entries
        - *Entry*
          - Rating
            - Star
          - Tags
            - Tag
*/

class Entry extends React.Component {

  checkLetter = () => {
    // If passed a new jump
    if (this.props.newLetter) {
      const letter = this.props.entry.id.charAt(0).toUpperCase();
      return (
        "jump"+letter
      );
    }
  }

  render() {
    const entry = this.props.entry;

    return (
      <section className="entry" id={this.checkLetter()}>
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
          {entry.tags ? <Tags tags={entry.tags} activeTags={this.props.activeTags} /> : null}
        </div>
        <div className="stamp">edited: {entry.stamp}</div>
      </section>
    );
  }
}

// -- Props
Entry.propTypes = {
  entry: PropTypes.object,
  newLetter: PropTypes.bool,
  activeTags: PropTypes.array
};

export default Entry;
