import React from 'react';

// -- Components
import Controls from './Controls';
import Entries from './Entries';

// -- Data
import { entries } from '../data/entries.json'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEntries: entries
    };
  }

  render() {
    return (
      <main>
        <Controls />
        <Entries entries={this.state.activeEntries} />
      </main>
    );
  }
}

export default Main;
