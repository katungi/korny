import React from 'react';
import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {
  return (
    // react must always return a single element
    <div>
     <HelloWorld name="God"/>
    </div>
  );
}

export default App;
