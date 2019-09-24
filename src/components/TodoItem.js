//Single todo item component
const TodoItem = () => {

    const removeTodoItem = ()=>{
        console.log('Hello');
        
      }

    return ( 
    <li className="collection-item" key={item.id}>{item.content}
    <span onClick={removeTodoItem} className="secondary-content">
    <i className="remove-btn material-icons">clear</i>
    </span>
    </li> 
    );
}
 
export default TodoItem;