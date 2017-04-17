import React from 'react';

/*
TODO:
- [x] Data controlled letters
- [ ] First one active
- [ ] Map jumps
- [ ] Track location
- [ ] Closest location
- [ ] Update location
*/

// -- Data
import { letters } from '../../data/app.json'

function Letter (props) {
  let classes = "";
  (props.disabled ? classes += "none" : null);
  (props.first == 0 ? classes += " active" : null);
  return <li className={classes}>{props.letter} </li>;
}

class ControlsLetters extends React.Component {
  render() {

    // Build Letter List
    const allLetters = letters.map((data, i) => (
      <Letter letter={data.letter} disabled={data.disabled} first={i} key={data.letter.toString()} />
    ));

    // Return All Letters (and handle)
    return <section className="letters controls">
      <div className="handle">
        <svg viewBox="0 0 32 32">
          <defs>
            <filter id="triangle-shadow" x="-55.0%" y="-35.0%" width="210.0%" height="210.0%" filterUnits="objectBoundingBox">
              <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
              <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
          </defs>
          <g transform="translate(10, 10) rotate(-90) translate(-10, -10) ">
            <use fill="black" fillOpacity="1" filter="url(#triangle-shadow)" xlinkHref="#triangle"></use>
            <polygon id="triangle" points="10 0 20 20 0 20"></polygon>
          </g>
        </svg>
      </div>
      <ul>{allLetters}</ul>
    </section>;
  }
}

export default ControlsLetters;
