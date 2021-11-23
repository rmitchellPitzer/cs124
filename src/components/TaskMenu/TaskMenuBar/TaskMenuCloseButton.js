import "../../../css/task_menu.css"
import AppDataController from "../../../modules/dataController/AppDataController";
import focusRecentTaskOrLast from "../../../modules/focusRecentTaskOrLast";

function closeMenu() {
    AppDataController.hideTaskMenu()
    focusRecentTaskOrLast()
}



export default function TaskMenuCloseButton(props) {
    return (
        <button
            className="task-menu-close-button"
            onClick={closeMenu}
        >
            Close
        </button>
    )
}