import React from 'react';

/*
TODO:
- Break Components Down Further
*/

class Entry extends React.Component {
  render() {
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
}

export default Entry;
