import { createStore } from 'redux';
import tasksReducer from './reducers'; // Ensure the correct path to your reducer

const store = createStore(tasksReducer);

export default store;
