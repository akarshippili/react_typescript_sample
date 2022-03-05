import './App.css';
import { useState } from 'react';
import Test from './test';

function App() {

  const [name, setName] = useState('world');
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function handelClose(){
    setName('React');
    console.log(name)
  }

  return (
    <div className="App">
      <h1>Current count: {count}</h1>
      <button onClick={ increment }>Increment</button>
      <Test name={name} handelClose={handelClose} />
    </div>
  );
}

export default App;
