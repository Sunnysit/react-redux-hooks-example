import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';


const TodoList = () => {

  //#2 Used to get a single attribute or object inside the Reducer

  //Get todoList from todoReducer
  const todoList = useSelector(state => state.todos.todoList);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Local state for the input
  const [inputTodo,setInputTodo] =  useState('');
  //Local state for the input error message
  const [errMsg,setErrMsg] = useState('');

  //Handle onChange event
  const handleInput = (e)=>{
    setInputTodo(e.target.value);
  }

  //Handle onClick event
  const addNewTodo = ()=>{
    //Valid input value
    if(inputTodo.trim().length>1)
    {   
        setErrMsg('');
        let newTodoObject={
            id: Math.random(),
            content:inputTodo
        }
         //Add new todo item into List with the action
        dispatch({type:'ADD_TODO',payload:newTodoObject});
        //Empty input 
        setInputTodo('');
    }
    else{
        //Display Error message
        setErrMsg('Please input something...');
    }

   
  }

    return (    
        <section id="section-todo">
        <h3 className="center-align white-text blue">Todo List</h3>
        {
            todoList.length>0?
            (<ul className="collection">
            {
              todoList.map(item => {
                return <TodoItem key={item.id} item={item} />
              })
            }
          </ul>):
          (<p className="center-align">You don't have anything to do! Awesome!</p>)
        }
       
        <div className="row">
        <p className="red-text err-msg col s12 center-align">
        {errMsg}
        </p>
        <div className="input-field col s10">
        <input onChange={handleInput} value={inputTodo} placeholder="Add todo..." id="todo-input" type="text" />
        <label htmlFor="todo-input" className="active">New Todo</label>
        </div>
      
        <button className="btn col s2 blue" onClick={addNewTodo} >Add</button>
        </div>
      </section>
      );
}
 
export default TodoList;