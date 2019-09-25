import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Single todo item component
const TodoItem = (props) => {
    //Get todoList from todoReducer
    const todoList = useSelector(state => state.todos.todoList)
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    //Remove single todo in the list
    const removeTodoItem = (todoId) => {
        //filter to get the todoId which need to be remove
        let newTodoList = todoList.filter(item => item.id !== todoId);
        dispatch({type: 'REMOVE_TODO', payload: newTodoList})

    }

    return (
        <li className="collection-item" key={props.item.id}>{props.item.content}
            <span
                onClick={() => {
                removeTodoItem(props.item.id)
            }}
                className="secondary-content">
                <i className="remove-btn material-icons blue-text">clear</i>
            </span>
        </li>
    );
}

export default TodoItem;