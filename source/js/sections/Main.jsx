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
      activeEntries: entries,
      activeTags: []
    };
  }

  addActiveTag = (tag) => {
    let tags = this.state.activeTags;

    // Check if tag already exists in state
    if (tags.indexOf(tag) === -1) {
      // Add tag
      tags.push(tag)
    } else {
      // Remove tag
      let index = tags.indexOf(tag);
      tags.splice(index, 1);
    }

    this.setState({activeTags: tags});
  }

  render() {
    return (
      <main>
        <Controls addTag={this.addActiveTag} />
        <Entries entries={this.state.activeEntries} activeTags={this.state.activeTags} />
      </main>
    );
  }
}

export default Main;
