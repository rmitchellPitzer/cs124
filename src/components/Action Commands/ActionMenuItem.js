


/* 


props: {
    text: string;
    command: Function 
    icon: FontAwesomeIcon
}
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActionMenuItem(props) {

    return (
        <button
            onClick={() => props.command()}
            class="action-item"
            autoFocus
        >
            { props.icon && <FontAwesomeIcon icon= {props.icon}/> }
            <div class="action-text">
                <p> {props.text} </p>
            </div>
        </button>
    )
}

