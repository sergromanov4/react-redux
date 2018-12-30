import{createStore } from 'redux';
import combineReducers from './reducers/mainReducer'

let store = createStore(combineReducers);



export default store;