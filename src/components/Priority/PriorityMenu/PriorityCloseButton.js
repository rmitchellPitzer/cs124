import AppDataController from "../../../modules/dataController/AppDataController";
import focusRecentTaskOrLast from "../../../modules/focusRecentTaskOrLast";

function closePriorityMenu() {
    AppDataController.hidePriorityMenu()
    focusRecentTaskOrLast()
}


export default function PriorityCloseButton(props) {
    return <button
            className="priority-close-button"
            onClick={closePriorityMenu}
            aria-label="Close Priority Selection Menu"
            >
                <span> x </span>
            </button>
}