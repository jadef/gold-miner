import React from 'react';

// -- Components
import Entry from '../components/entries/Entry';

// -- Data
import { entries  } from '../data/entries.json'

/*
TODO:
- Iterate Entries
*/

class Entries extends React.Component {
  render() {

    const allEntries = entries.sort();

    return (
    <div className="entries">
    {JSON.stringify({allEntries})}
      {allEntries.map((data, i) => (
        <Entry entry={data} key={i} />
      ))}
    </div>);
  }
}

export default Entries;
