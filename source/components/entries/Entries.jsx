import React from 'react';

// -- Components
import Entry from './Entry';

/*
TODO:
- Iterate Entries
*/

class Entries extends React.Component {
  render() {
    return <div className="entries">
      <Entry />
      <Entry />
      <Entry />
    </div>;
  }
}

export default Entries;
