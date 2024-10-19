import { configureStore } from '@reduxjs/toolkit';
import TodolistReducer from './reducers/TodolistReducers';

export const store = configureStore({
  reducer: {
    TodolistReducer: TodolistReducer, // Ensure key follows camelCase or the pattern you expect
  },
});
