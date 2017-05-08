import React from 'react';
import PropTypes from 'prop-types';

// -- Styles
import '../../../sass/components/controls/tags.scss';

// -- Data
import { tags } from '../../data/app.json'

/* -- Hierarchy
  - App
    - Main
      - Controls
        - *ControlsTags*
          - *Tag*
*/

// ---- All Tags Control
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
  BuildTags = () => {
    const allTags = tags.map((tag) => (
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

// -- Props
ControlsTags.propTypes = {
  addTag: PropTypes.func
};

// --- Single Tag Component
class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleClick = (event) => {
    event.preventDefault();
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

// -- Props
Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  addTag: PropTypes.func
};

export default ControlsTags;
