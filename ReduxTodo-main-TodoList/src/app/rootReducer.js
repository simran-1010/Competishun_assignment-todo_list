import {combineReducers} from '@reduxjs/toolkit';
import addTodoReducer from '../features/AddTodo/AddTodoSlice';
export const reducers = combineReducers({
  addTodoReducer: addTodoReducer,
});
