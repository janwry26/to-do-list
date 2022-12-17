import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import {useState} from 'react';
function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <ToDoList />
      <input type="text"/>
      
      <button>Add Todo</button>
      <button>Clear Complete</button> 
      <div>0 left to do</div>
    </>
  );
}

export default App;
