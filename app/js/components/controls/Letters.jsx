import React from 'react';
import PropTypes from 'prop-types';

/* -- Hierarchy
  - App
    - Main
      - Controls
        - *ControlsLetters*
          - *Letter*
*/

/*
TODO:
- [x] Data controlled letters
- [ ] First one active
- [ ] Map jumps
- [ ] Track location
- [ ] Closest location
- [ ] Update location
*/

// -- Styles
import '../../../sass/components/controls/letters.scss';

// -- Data
import { letters } from '../../data/app.json'

// ---- All Letters Control
class ControlsLetters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  handleClick(key) {
    this.setState({activeIndex: key})
  }

  render() {
    // Build Letter List
    const allLetters = letters.map((data, i) => (
      <Letter key={i}
        letter={data.letter}
        index={i}
        disabled={data.disabled}
        isActive={this.state.activeIndex===i}
        onClick={ this.handleClick.bind(this) }
      />
    ));

    // Return All Letters (and handle)
    return (
      <section className="letters controls">
        <div className="letter-wrapper">
          <ul>{allLetters}</ul>
          <div id="letter-handle" className="handle">
            <svg viewBox="0 0 32 32">
              <defs>
                <filter id="triangle-shadow" x="-55.0%" y="-35.0%" width="210.0%" height="210.0%" filterUnits="objectBoundingBox">
                  <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
              </defs>
              <g transform="translate(10, 10) rotate(-90) translate(-10, -10) ">
                <use className="c-bg-dark" fillOpacity="1" filter="url(#triangle-shadow)" xlinkHref="#triangle"></use>
                <polygon id="triangle" className="c-bg-primary" points="10 0 20 20 0 20"></polygon>
              </g>
            </svg>
          </div>
        </div>
      </section>
    );
  }
}

// // -- Single Letter
class Letter extends React.Component {

  handleClick(event) {
    if (!this.props.disabled) {
      // Make only this active (passed to parent component)
      this.props.onClick(this.props.index);
      // Compute math for Handle Position
      let topLocation = this.props.index / 26 * 100;
      // Find Handle element and add top style
      document.getElementById("letter-handle").style.top = topLocation + "%";
    } else {
      event.preventDefault();
    }
  }

  render () {
    let classes = "";
    (this.props.disabled ? classes += "none" : null);
    (this.props.isActive && !this.props.disabled ? classes += " active" : null);

    return (
      <li className={classes}>
        <a href={"#jump" + this.props.letter} onClick={this.handleClick.bind(this)}>
          {this.props.letter}
        </a>
      </li>
    );
  }
}

// -- Props
Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  index: PropTypes.number,
};

export default ControlsLetters;
