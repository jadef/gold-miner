import React from 'react';

// -- Components
import ControlsTags from './controls/Tags';
import ControlsLetters from './controls/Letters';
import Entries from './entries/Entries';

class Main extends React.Component {
  render() {
    return <main>
    <ControlsTags />
    <ControlsLetters />
    <Entries />
  </main>;
  }
}

export default Main;
