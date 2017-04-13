import React from 'react';

// -- Components
import ControlsTags from '../components/controls/Tags';
import ControlsLetters from '../components/controls/Letters';
import Entries from './Entries';

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
