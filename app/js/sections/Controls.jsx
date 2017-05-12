import React from 'react';
import PropTypes from 'prop-types';

/*
Grouped Controls into one component so that we can
add just one scroll event.
*/

/* -- Hierarchy
  - App
    - Main
      - *Controls*
        - ControlsTags
          - Tag
        - ControlsLetters
          - Letter
*/

// -- Components
import ControlsTags from '../components/controls/Tags';
import ControlsLetters from '../components/controls/Letters';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {topHeight: ""};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Pass through of the active tag(s)
  passActiveTag = (tag) => {
    this.props.addTag(tag);
  }

  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let heightCheck = Math.max(72, 250 - scrollTop);

    this.setState({topHeight: heightCheck});
  }

  render() {
    return (
      <div className="control-wrapper" style={{top: this.state.topHeight + "px", height: "calc(100vh - " + this.state.topHeight + "px"}}>
        <ControlsTags addTag={this.passActiveTag} />
        <ControlsLetters />
      </div>
    );
  }
}

// -- Props
Controls.propTypes = {
  addTag: PropTypes.func
};

export default Controls;
