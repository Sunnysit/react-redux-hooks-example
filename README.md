# React Redux Hooks Example

This is a simple example to demonstrate how to use **[React Redux Hooks](https://react-redux.js.org/next/api/hooks#hooks)** in React Project. **[Hooks API](https://reactjs.org/docs/hooks-intro.html)** is a new addition in React 16.8. They allow us to use state and other features in **React Function Component**.

**[Live Demo](https://redux-hooks-example.netlify.com/)**

## Redux Hooks in this example
### useSelector()
```javascript
import { useSelector } from  'react-redux';

const  TodoList  = () => {

//Get todoList from todoReducer
const  todoList  =  useSelector(state  =>  state.todos.todoList);

}
```
### useDispatch()
```javascript
import { useDispatch } from  'react-redux';

//TodoList React Component
const  TodoList  = () => {

//Use for all the dispatch actions
const  dispatch  =  useDispatch();

//Add new todo item into List with the action
dispatch({type:'ADD_TODO',payload:newTodoObject});

}
```

## TypeScript

You may want to see what's the different when using Redux Hooks use in TypeScript. Here is the **[TypeScript version of this example](https://github.com/Sunnysit/react-redux-hooks-example/tree/typescript)**


## License
[MIT](https://github.com/microsoft/vscode-test/blob/master/LICENSE)



