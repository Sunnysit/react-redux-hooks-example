const initState = {
    todoList: [
        {
            id: 1,
            content: 'Play video game'
        }, {
            id: 2,
            content: 'Learn nodejs & python'
        }, {
            id: 3,
            content: 'Join meetup event'
        }
    ]
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;