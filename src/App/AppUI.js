import React from "react";

import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    filteredTodos,
    completedTodos,
    deleteTodos

}) {
    return (
        <React.Fragment>
            <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {error && <p>Desesperate now!</p>}
        {loading && <p>We're loading, keep calm.</p>}
        {(!loading && filteredTodos === 0 ) && <p>You have no todos, asshole.</p>}

        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodos(todo.text)} 
            onDelete={() => deleteTodos(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };