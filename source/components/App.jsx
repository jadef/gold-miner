import React from 'react';

// -- Components
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


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
