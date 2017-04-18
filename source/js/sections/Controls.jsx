import React from 'react';

/*
Grouped Controls into one component so that we can
add just one scroll event.
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

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    let heightCheck = Math.max(72, 250 - scrollTop);

    console.log("top: "+heightCheck+"px, height: calc(100vh - "+heightCheck+"px)");
     // style={{top: 50+"px", height: 100+"vh"}}
    this.setState({topHeight: heightCheck});
  }

  render() {
    return (
      <div className="control-wrapper" style={{top: this.state.topHeight + "px", height: "calc(100vh - " + this.state.topHeight + "px"}}>
        <ControlsTags />
        <ControlsLetters />
      </div>
    );
  }
}

export default Controls;