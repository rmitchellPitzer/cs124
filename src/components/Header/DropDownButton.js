import "../../css/banner.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";

function handleOnClick() {
    AppDataController.showMenu()
}

export default function DropDownButton({hasCompletedTasks}) {
    const classNames = !hasCompletedTasks ? "banner-drop-down hidden" : "banner-drop-down"
    return (
        <button
            className={classNames}
            onClick={handleOnClick}
        >
                <FontAwesomeIcon icon={ faEllipsisV}/>
        </button>
    )
}