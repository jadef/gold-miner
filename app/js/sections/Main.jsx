import React from 'react';

// -- Components
import Controls from './Controls';
import Entries from './Entries';

// -- Styles
import '../../sass/sections/main.scss';

// -- Data
import { entries } from '../data/entries.json'

/* -- Hierarchy
  - App
    - *Main*
      - Controls
        - ControlsTags
        - ControlsLetters
      - Entries
        - Entry
*/

// -- Main body component
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEntries: entries,
      activeTags: []
    };
  }

  // build active tags and disseminate
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
    this.checkActiveTags();
  }

  // Build a new list of entries from active tags
  checkActiveTags = () => {
    const activeTags = this.state.activeTags;

    // Empty activeTags escapes with original entries list
    if (!activeTags.length) {
      this.setState({activeEntries: entries});
      return null;
    }

    // Loop through and build a filtered list of entries
    let activeTempList = [];
    entries.forEach(function(entry) {

      // Check ALL active Tags against entries tags for match
      let checkTags = activeTags.every(function (val) { return entry.tags.indexOf(val) >= 0; });

      if (entry.tags && checkTags) {
        // Check if already added to entries
        (activeTempList.indexOf(entry) === -1) ? activeTempList.push(entry) : null;
      }

    });
    // Update the state for current activeEntries
    this.setState({activeEntries: activeTempList});
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
