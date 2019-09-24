import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';

function App() {

  const counter = useSelector(state => state.myCounter.counter);
  const dispatch = useDispatch();

  const name = useSelector(state => state.characters.name);

 

  return (
    <div className="App">
      <header className="App-header">
        <h2>Your Name: {name}</h2>
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}>
        +
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}>
        -
        </button>
        <input onChange={e=>dispatch({type:'CHANGE_NAME',payload:e.target.value})} type="text"/>
      </header>
    </div>
  );
}

export default App;
