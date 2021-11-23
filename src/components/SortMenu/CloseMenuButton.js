import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose} from "@fortawesome/free-solid-svg-icons"
import AppDataController from "../../modules/dataController/AppDataController";
import focusRecentTaskOrLast from "../../modules/focusRecentTaskOrLast";

function closeMenu() {
    AppDataController.hideSortMenu()
    const sortCloseButton = document.getElementById("filter-button")
    if (!sortCloseButton) return
    sortCloseButton.focus()
}
export default function CloseMenuButton(props) {
    return (
        <button
            id="sort-close-button"
            className="sort-close-button sort-button-color"
            onClick={closeMenu}
        >
           <span> x </span>
        </button>
    )

}