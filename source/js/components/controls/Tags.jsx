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

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }

  render() {
    return (
      <li
        className={this.state.active ? 'active': null}
        onClick={this.toggleClass}
      >{this.props.tag}</li>
    );
  }
}

class ControlsTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  // Build Tag List
  BuildTags = (props) => {
    const allTags = tags.map((tag, i) => (
      <Tag tag={tag} key={tag.toString()} />
    ));

    return ( allTags );
  }

  handleClick = (event) => {
    event.preventDefault();
    const currentState = this.state.open;
    this.setState({
      open: !currentState
    });

    // TODO add .open to section
  }

  render() {
    return (
      <section className={`tags controls ${this.state.open ? 'open': null}`}>
        <ul className="list">{this.BuildTags()}</ul>
        <div className="trigger"><a href="#" className={this.state.open ? 'active': null} onClick={this.handleClick}>Tags</a></div>
      </section>
    );
  }
}

export default ControlsTags;
