import {configureStore} from '@reduxjs/toolkit';
import addTodoReducer from '../features/AddTodo/AddTodoSlice';
import {persistReducer, persistStore} from 'redux-persist';
import { reducers } from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  whitelist: ['addTodoReducer'],
  timeout: 100000,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);


