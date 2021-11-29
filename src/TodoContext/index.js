import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
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

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            id: todos.length, 
            text: text,
            completed: false
        });
        setTodos(newTodos);
        // setTodos(newTodos);
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
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider >
    );
}

{/* <TodoContext.Consumer></TodoContext.Consumer> */}
export { TodoContext, TodoProvider };