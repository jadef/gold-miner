import React from 'react';

// -- Components
import Header from './sections/Header';
import Footer from './sections/Footer';
import Main from './sections/Main';

import '../sass/styles.scss';

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
