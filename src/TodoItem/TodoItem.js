import React from "react";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';



function TodoItem(props){
    return( 
        <React.Fragment>
            <li className={`list-group-item d-flex flex-row justify-content-between`}>
                <span className={`check ${props.completed && 'check-completed'}`} onClick={props.onComplete}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <p className={`${props.completed && 'text-completed'}`}>{props.text}</p>
                <span className={`delete`}>
                    <button type="button" className={"btn btn-secondary delete"} onClick={props.onDelete}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </span>
            </li>
        </React.Fragment>
    );
}

export { TodoItem };