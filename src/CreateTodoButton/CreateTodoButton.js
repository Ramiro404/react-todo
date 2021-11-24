import React from "react";

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function CreateTodoButton(){
    const onClickButton = () => {
        alert('AAAAAAAAAAAAAAAAAAAA')
    }

    return(
        <React.Fragment>
            <button type="button" className={"btn btn-secondary float-right"} onClick={onClickButton}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </React.Fragment>
    );
}

export { CreateTodoButton };