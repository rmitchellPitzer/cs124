


/* 


props: {
    text: string;
    command: Function 
    icon: FontAwesomeIcon
}
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppDataController from "../../modules/dataController/AppDataController";

function shouldClose(event) {
    const isEscape = event.key == "Escape"
    if (isEscape) AppDataController.closeMenu()
}

export default function ActionMenuItem(props) {

    return (
        <button
            onClick={() => props.command()}
            class="action-item"
            onKeyDown={(e) => shouldClose(e)}
            autoFocus
        >
            { props.icon && <FontAwesomeIcon icon= {props.icon}/> }
            <div class="action-text">
                <p> {props.text} </p>
            </div>
        </button>
    )
}

