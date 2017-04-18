import React from 'react';

// -- Components
import Controls from './Controls';
import Entries from './Entries';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Controls />
        <Entries />
      </main>
    );
  }
}

export default Main;
