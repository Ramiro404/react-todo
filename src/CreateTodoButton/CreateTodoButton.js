import React from "react";

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <React.Fragment>
            <button type="button" className={"btn btn-secondary  CreateTodoButton"} onClick={onClickButton}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </React.Fragment>
    );
}

export { CreateTodoButton };