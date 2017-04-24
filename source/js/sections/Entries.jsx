import React from 'react';

// -- Components
import Entry from '../components/entries/Entry';

/*
- state array of entry IDs visible
- update state from tags child component events
  - hide IDs that aren't in array (unmount?)
  - active control tag
  - active entry tag
*/

class Entries extends React.Component {

  BuildEntries = (props) => {

    // Alphabetical sort of id
    const sortEntries = this.props.entries.sort(function(a, b) {
      return a.id.localeCompare(b.id);
    })

    const allEntries = sortEntries.map((data) => (
      <Entry entry={data} key={data.id} activeTags={this.props.activeTags} />
    ))

    return ( allEntries );

  }

  render() {
    return (
      <div className="entries">
        <div className="fade" />
        <p className="results">Results: {this.props.entries.length}</p>
        <br className="jump" id="jumpA" />
        {this.BuildEntries()}
      </div>
    );
  }
}

export default Entries;
