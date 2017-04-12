import React from 'react';
import { Link } from 'react-router-dom';

// -- Define Them
function Header() {
  return <header>
    <div className="wrapper">
      <section className="logo">
        <img src="images/mining crest.svg" alt="Gold Miner Logo" />
      </section>
      <section className="intro">
        <h2>Picking Technologies</h2>
        <p>Always keep learning. <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae gravida enim. Integer eget odio pellentesque, aliquam sapien quis, aliquam mauris. Etiam a volutpat magna.</span></p>
      </section>
      <div className="totop">
        To Top
      </div>
    </div>
  </header>;
}

function Footer() {
  return <footer>Footer</footer>;
}

function ControlsTags() {
  return <section className="tags controls">
      <ul className="list">
        <li>Abstraction</li>
        <li>Automated</li>
        <li>Command Line</li>
        <li>CSS</li>
        <li>Framework</li>
        <li>Grid</li>
        <li className="active">JavaScript</li>
        <li className="active">Node</li>
        <li>PHP</li>
        <li>Preprocessor</li>
        <li>Ruby</li>
        <li>Single Page</li>
        <li>Template</li>
        <li>Testing</li>
        <li>Another </li>
        <li>Another </li>
        <li>Another </li>
        <li>Another </li>
        <li>Another </li>
        <li>Another </li>
        <li>Another </li>
      </ul>
      <div className="trigger">Tags Filter</div>
    </section>;
}

function ControlsLetters() {
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

function Entry() {
  return <section className="entry">
        <div className="title">
          <h3>Browserify</h3>
          <a className="external" href="#"><img src="images/external.svg" alt="external link" /></a>
        </div>
        <div className="rating">
          <svg className="star" viewBox="0 0 26 26">
            <defs>
              <filter id="star-shadow" x="-55.0%" y="-35.0%" width="210.0%" height="210.0%" filterUnits="objectBoundingBox">
                <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
              </filter>
            </defs>
            <use fill="black" fillOpacity="1" filter="url(#star-shadow)" xlinkHref="#star"></use>
            <polygon id="star" points="10 14 4.12214748 18.0901699 6.19577393 11.236068 0.489434837 6.90983006 7.64885899 6.76393202 10 0 12.351141 6.76393202 19.5105652 6.90983006 13.8042261 11.236068 15.8778525 18.0901699"></polygon>
          </svg>
          <svg className="star" viewBox="0 0 26 26">
            <use fill="black" fillOpacity="1" filter="url(#star-shadow)" xlinkHref="#star"></use>
            <polygon id="star" points="10 14 4.12214748 18.0901699 6.19577393 11.236068 0.489434837 6.90983006 7.64885899 6.76393202 10 0 12.351141 6.76393202 19.5105652 6.90983006 13.8042261 11.236068 15.8778525 18.0901699"></polygon>
          </svg>
          <svg className="star" viewBox="0 0 26 26">
            <use fill="black" fillOpacity="1" filter="url(#star-shadow)" xlinkHref="#star"></use>
            <polygon id="star" points="10 14 4.12214748 18.0901699 6.19577393 11.236068 0.489434837 6.90983006 7.64885899 6.76393202 10 0 12.351141 6.76393202 19.5105652 6.90983006 13.8042261 11.236068 15.8778525 18.0901699"></polygon>
          </svg>
          <svg className="star no" viewBox="0 0 26 26">
            <use fill="black" fillOpacity="1" filter="url(#star-shadow)" xlinkHref="#star"></use>
            <polygon id="star" points="10 14 4.12214748 18.0901699 6.19577393 11.236068 0.489434837 6.90983006 7.64885899 6.76393202 10 0 12.351141 6.76393202 19.5105652 6.90983006 13.8042261 11.236068 15.8778525 18.0901699"></polygon>
          </svg>
          <svg className="star no" viewBox="0 0 26 26">
            <use fill="black" fillOpacity="1" filter="url(#star-shadow)" xlinkHref="#star"></use>
            <polygon id="star" points="10 14 4.12214748 18.0901699 6.19577393 11.236068 0.489434837 6.90983006 7.64885899 6.76393202 10 0 12.351141 6.76393202 19.5105652 6.90983006 13.8042261 11.236068 15.8778525 18.0901699"></polygon>
          </svg>
        </div>
        <div className="desc">
          <div className="content">
            <p>Collects JS modules (and script files) and mushes them all into a single app file. Often compared to requireJS.</p>
            <p>I guess it's similar to the way Node.js requires dependencies, but for compiling to the front end.</p>
          </div>
          <div className="btns tags">
            <span>Automated</span>
            <span className="active">JavaScript</span>
            <span className="active">Node</span>
          </div>
        </div>
        <div className="stamp">edited: 2017/03/28</div>
      </section>;
}

class Main extends React.Component {
  render() {
    return <main>
    <ControlsTags />
    <ControlsLetters />
    <div className="entries">
      <Entry />
      <Entry />
      <Entry />
    </div>
  </main>;
  }
}

// -- Build it
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
