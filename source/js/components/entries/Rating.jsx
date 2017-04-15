import React from 'react';


/*
TODO:
-
*/

class Rating extends React.Component {
  render() {
    return <div className="rating">
      {this.props.rank}
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
        </div>;
  }
}

export default Rating;
