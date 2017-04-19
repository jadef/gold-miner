import React from 'react';
import Snap from 'snapsvg';

// -- Components
import Header from './sections/Header';
import Footer from './sections/Footer';
import Main from './sections/Main';


// ---- Build the Structure
class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Main />
      <Footer />
    </div>;
  }
}

export default App;
