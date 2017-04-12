import React from 'react';

// -- Components
import Header from './Header';
import Footer from './Footer';
import ControlsTags from './controls/Tags';
import ControlsLetters from './controls/Letters';
import Entries from './Entries';

class Main extends React.Component {
  render() {
    return <main>
    <ControlsTags />
    <ControlsLetters />
    <Entries />
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
