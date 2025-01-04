import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1); // 비동기적 작동
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>click!</button>
    </div>
  );
}

export default App;
