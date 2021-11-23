import AppDataController from "../../modules/dataController/AppDataController"
import "../../css/action_button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import TaskDataController from "../../modules/dataController/TaskDataController";

function handleOnClick() {
    const taskID = TaskDataController.createTask()
    AppDataController.setActiveTask(taskID)
    AppDataController.showTaskMenu()
}

export default function ActionButton() {
    return (
        <button 
            class="action-button"
            onClick={handleOnClick}
        >
        <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

