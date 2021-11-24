import React from "react";

function TodoCounter({total, completed}) {
    return (
        <React.Fragment>
            <h1>You've completed {completed} of {total} todos</h1>
        </React.Fragment>
    );
}

export  { TodoCounter };
