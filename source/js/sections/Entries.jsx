import React from 'react';

// -- Components
import Entry from '../components/entries/Entry';

/*
- state array of entry IDs visible
- update state from tags child component events
  - hide IDs that aren't in array (unmount?)
  - active control tag
  - active entry tag
*/

// -- Data
import { entries } from '../data/entries.json'



class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEntries: entries
    };
  }

  handleClick = () => {
    this.setState({
      activeEntries: entries.splice(0, Math.floor(Math.random() * (20 - 5 + 1) + 5))
      // TEMP randomizer
    });
  }

  BuildEntries = (props) => {

    // Alphabetical sort of id
    const sortEntries = this.state.activeEntries.sort(function(a, b) {
      return a.id.localeCompare(b.id);
    })

    const allEntries = sortEntries.map((data) => (
      <Entry entry={data} key={data.id} />
    ))

    console.log( allEntries );
    return ( allEntries );

  }

  render() {
    return (
      <div className="entries">
        <button onClick={this.handleClick}>Ping</button>
        <div className="fade" />
        <br className="jump" id="jumpA" />
        {this.BuildEntries()}
      </div>
    );
  }
}

export default Entries;
