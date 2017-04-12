import React from 'react';

/*
TODO:
- Map jumps
- Track location
- Closest location
- Update location
*/

class ControlsLetters extends React.Component {
  render() {
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
      <ul>
        <li className="active">A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </section>;
  }
}

export default ControlsLetters;
