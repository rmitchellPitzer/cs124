import ListController from "../../modules/listController";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

export default function BackButton(props) {

    return <button
        onClick={goToListMenu}
        className="drop-down black menu-item"
    >
        <FontAwesomeIcon icon={faAngleLeft}/>
    </button>
}

function goToListMenu() {
    ListController.navToList(null)
}