import characterReducer from './characterReducer';
import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    characters: characterReducer,
    myCounter: counterReducer,
})

export default rootReducer