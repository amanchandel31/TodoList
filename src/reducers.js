import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK, SET_TASKS } from "./action.js";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, checked: !task.checked } : task
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
