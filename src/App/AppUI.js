import React from "react";

import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index';

function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    filteredTodos,
    completedTodos,
    deleteTodos,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desesperate now!</p>}
        {loading && <p>We're loading, keep calm.</p>}
        {(!loading && filteredTodos === 0) && <p>You have no todos, asshole.</p>}

        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)} />
        ))}
      </TodoList>
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };