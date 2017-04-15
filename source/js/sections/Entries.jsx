import React from 'react';

// -- Components
import Entry from '../components/entries/Entry';

// -- Data
import { entries  } from '../data/entries.json'

class Entries extends React.Component {
  render() {

    // Alphabetical sort of id
    const sortEntries = entries.sort(function(a, b) {
      return a.id.localeCompare(b.id);
    });

    // Fetch all entries
    const allEntries = sortEntries.map((data, i) => (
      <Entry entry={data} key={i} />
    ));

    // Return wrapped entries
    return (
      <div className="entries">
        {allEntries}
      </div>
    );
  }
}

export default Entries;
