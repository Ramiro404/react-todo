import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <h1>You've completed {completedTodos} of {totalTodos} todos</h1>
        </React.Fragment>
    );
}

export  { TodoCounter };
