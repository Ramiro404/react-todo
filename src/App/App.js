// import logo from './logo.svg';
import './App.css';
import React from 'react';

import {AppUI} from './AppUI';


// const defaultTodos = [
//   { id: 1, text: 'AAAA', completed: true },
//   { id: 2, text: 'BBB', completed: false },
//   { id: 3, text: 'CALLAO', completed: true },
//   { id: 4, text: 'NANANA', completed: false }
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let filteredTodos = [];
 
  if (searchValue.length > 0) {
    filteredTodos = todos.filter(todo => {
      const searchLower = searchValue.toLowerCase();
      const todoTextLower = todo.text.toLowerCase();
      return todoTextLower.includes(searchLower);
    });
    console.log(filteredTodos);
  } else{
    filteredTodos = todos; 
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    saveTodos(newTodos);
    // setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
    // setTodos(newTodos);
  }


  return (
    <React.Fragment>
      <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filteredTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
      />
    </React.Fragment>
  );
}

export default App;
