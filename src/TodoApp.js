import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, removeTask, setTasks } from './action.js';
import './TodoApp.css';
import iconimg from './images/icon.png';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      alert('You must write something');
      return;
    }
    const newTask = { text: inputValue, checked: false };
    dispatch(addTask(newTask));
    setInputValue('');
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List<img src={iconimg} alt="icon" />
        </h2>
        <div className="row">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add your text"
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul id="list-container">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.checked ? 'checked' : ''}
              onClick={() => dispatch(toggleTask(index))}
            >
              {task.text}
              <button className="delete-btn" onClick={(e) => {
                e.stopPropagation();
                dispatch(removeTask(index));
              }}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
