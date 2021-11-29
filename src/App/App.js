// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// const defaultTodos = [
//   { id: 1, text: 'AAAA', completed: true },
//   { id: 2, text: 'BBB', completed: false },
//   { id: 3, text: 'CALLAO', completed: true },
//   { id: 4, text: 'NANANA', completed: false }
// ];

function App() {
  // console.log('Before render');
  // React.useEffect(() => {
  //   console.log('use effect');
  // }, []);
  // console.log('After render');

  return (
    <React.Fragment>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </React.Fragment>
  );
}

export default App;
