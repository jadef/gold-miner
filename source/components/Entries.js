import React from 'react';

import Entry from './Entry';


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
