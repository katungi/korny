import React from 'react';
import HelloWorld from './components/HelloWorld';
import CounterExample from './components/CounterExample';
import './App.css';

function App() {
  return (
    // react must always return a single element
    <div>
     {/* <HelloWorld name="God"/> */}

     <CounterExample/>
    </div>
  );
}

export default App;
