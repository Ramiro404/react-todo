import React from "react";

function TodoList(props){
    return(
        <React.Fragment>
            <ul className={'list-group'}>
            {props.children}
            </ul>
        </React.Fragment>
    );
}

export { TodoList };