import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

function App() {

  //useSelector function for getting the specific reducer we need

  //#1 Used to get the whole reducer object like getting characterReducer
  
  //Get the whole state from characterReducer
  const person = useSelector(state => state.characters);
  
  //#2 Used to get a single attribute or object inside the Reducer

  //Get todoList from todoReducer
  const todoList = useSelector(state => state.todos.todoList)
  //Get counter from counterReducer
  const counter = useSelector(state => state.myCounter.counter);
  
  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Remove single todo in the list
  const removeTodoItem = (todoId)=>{
    //filter to get the todoId which need to be remove
    let newTodoList = todoList.filter(item => item.id!==todoId);
    dispatch({type:'REMOVE_TODO',payload:newTodoList})
  }

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
        <section>
          <h3 className="center-align">Todo List</h3>
          <ul className="collection">
            {
              todoList.map(item => {
                return <li className="collection-item" key={item.id}>{item.content}<span onClick={()=>{removeTodoItem(item.id)}} className="secondary-content"><i className="remove-btn material-icons">clear</i></span></li>
              })
            }
          </ul>
        </section>
        </main>
    </div>
  );
}

export default App;
