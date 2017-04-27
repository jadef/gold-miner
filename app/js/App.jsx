import React from 'react';

// -- Components
import Header from './sections/Header';
import Footer from './sections/Footer';
import Main from './sections/Main';


// ---- Build the Structure
class App extends React.Component {
  render() {
    return <div>
      <h1>Test</h1>
      <Header />
      <Main />
      <Footer />
    </div>;
  }
}

export default App;
