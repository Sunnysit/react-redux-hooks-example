import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import TodoList from './views/TodoList';

function App() {

  //useSelector function for getting the specific reducer we need

  //#1 Used to get the whole reducer object like getting characterReducer
  
  //Get the whole state from characterReducer
  const person = useSelector(state => state.characters);
  
  //Get counter from counterReducer
  const counter = useSelector(state => state.myCounter.counter);
  
  //Use for all the dispatch actions
  const dispatch = useDispatch();


  return (
    <div className="App">
      <main className="container">
      <header className="App-header">
        <h2>Your Name: {person.name}</h2>
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}>
        +
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}>
        -
        </button>
        <input onChange={e=>dispatch({type:'CHANGE_NAME',payload:e.target.value})} type="text"/>
      </header>
        <div className="divider"></div>
        <TodoList />
        </main>
    </div>
  );
}

export default App;
