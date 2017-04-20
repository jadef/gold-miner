import React from 'react';

/*
TODO:
- [x] Iterate tags
- [ ] Active tags
- [ ] Filter entries
- [ ] Tag Drawer
*/

// -- Data
import { tags } from '../../data/app.json'

function Tag (props) {
  return <li>{props.tag}</li>;
}

class ControlsTags extends React.Component {

  handleClick = () => {

  }

  // Build Tag List
  BuildTags = (props) => {
    const allTags = tags.map((tag, i) => (
      <Tag tag={tag} key={tag.toString()} onClick={this.handleClick} />
    ));

    return ( allTags );
  }

  render() {
    return (
      <section className="tags controls">
        <ul className="list">{this.BuildTags()}</ul>
        <div className="trigger">Tags</div>
      </section>
    );
  }
}

export default ControlsTags;
