import "../../css/banner.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";

function handleOnClick() {
    AppDataController.showMenu()
}

export default function DropDownButton(props) {
    return (
        <button
            className="banner-drop-down"
            onClick={handleOnClick}
        >
                <FontAwesomeIcon icon={ faEllipsisV}/>
        </button>
    )
}