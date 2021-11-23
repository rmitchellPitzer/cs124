
import "../../../css/task_menu.css"
import AppDataController from "../../../modules/dataController/AppDataController";

function closeMenu() {
    AppDataController.hideTaskMenu()
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