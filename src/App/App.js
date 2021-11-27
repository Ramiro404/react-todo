// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { AppUI } from './AppUI';


// const defaultTodos = [
//   { id: 1, text: 'AAAA', completed: true },
//   { id: 2, text: 'BBB', completed: false },
//   { id: 3, text: 'CALLAO', completed: true },
//   { id: 4, text: 'NANANA', completed: false }
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1500)
  })



  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {

  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
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
    // console.log(filteredTodos);
  } else {
    filteredTodos = todos;
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    setTodos(newTodos);
    // setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    // setTodos(newTodos);
  }

  // console.log('Before render');
  // React.useEffect(() => {
  //   console.log('use effect');
  // }, []);
  // console.log('After render');

  return (
    <React.Fragment>
      <AppUI
        loading={loading}
        error={error}
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
