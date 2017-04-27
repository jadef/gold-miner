import React from 'react';

function Star (props) {
  // Define classes (boolean)
  let classes = "star no";
  props.active == true ? classes = "star" : null;

  // Dfine filters (first only)
  let filters = null;
  if (props.first == true) {
    filters = (
        <defs>
          <filter id="star-shadow" x="-55.0%" y="-35.0%" width="210.0%" height="210.0%" filterUnits="objectBoundingBox">
            <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
          </filter>
        </defs>
    );
  }

  // Return the star
  return (
      <svg className={classes} viewBox="0 0 26 26">
        {filters}
        <use fill="black" fillOpacity="1" filter="url(#star-shadow)" xlinkHref="#star"></use>
        <polygon id="star" points="10 14 4.12214748 18.0901699 6.19577393 11.236068 0.489434837 6.90983006 7.64885899 6.76393202 10 0 12.351141 6.76393202 19.5105652 6.90983006 13.8042261 11.236068 15.8778525 18.0901699"></polygon>
      </svg>
  )
}

class Rating extends React.Component {
  render() {

    // Count out the stars
    const stars = [];
    const totalStars = 5;
    const lastStar = this.props.rank;

    // Loop through each star
    for (let i=0; i < totalStars; i++) {
      // Define first boolean
      let first = false;
      i == 0 ? first = true : null;

      // Define active boolean
      let active = false;
      i < lastStar ? active = true : null;

      // Add another star
      stars.push(<Star first={first} active={active} key={i.toString()} />);
    }

    return (
      <div className="rating" title="Star Rating">
        {stars}
      </div>
    );
  }
}

export default Rating;
