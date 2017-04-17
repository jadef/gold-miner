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
  render() {

    // Build Tag List
    const allTags = tags.map((tag, i) => (
      <Tag tag={tag} key={tag.toString()} />
    ));

    // Return All Tags
    return <section className="tags controls">
      <ul className="list">{allTags}</ul>
      <div className="trigger">Tags Filter</div>
    </section>;
  }
}

export default ControlsTags;
