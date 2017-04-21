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

// --- Single Tag Component
class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleClick = (event) => {
    // Toggle Class
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });

    // Add to active tags in main component
    this.props.addTag(this.props.tag);
  }

  render() {
    return (
      <li
        className={this.state.active ? 'active': null}
        onClick={this.handleClick}
      >{this.props.tag}</li>
    );
  }
}

// ---- All Tags Control Component
class ControlsTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  // Pass through of the active tag(s)
  passActiveTag = (tag) => {
    this.props.addTag(tag);
  }

  // Build Tag List
  BuildTags = (props) => {
    const allTags = tags.map((tag, i) => (
      <Tag tag={tag} key={tag.toString()} addTag={this.passActiveTag} />
    ));

    return ( allTags );
  }

  // For the mobile drawer
  handleTriggerClick = (event) => {
    event.preventDefault();
    const currentState = this.state.open;
    this.setState({
      open: !currentState
    });
  }

  render() {
    return (
      <section className={`tags controls ${this.state.open ? 'open': null}`}>
        <ul className="list">{this.BuildTags()}</ul>
        <div className="trigger"><a href="#" className={this.state.open ? 'active': null} onClick={this.handleTriggerClick}>Tags</a></div>
      </section>
    );
  }
}

export default ControlsTags;
