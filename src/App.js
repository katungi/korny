import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // react must always return a single element
    <div>
     <Header/>
     This is the home Page
      <Footer/>
    </div>
  );
}

export default App;
