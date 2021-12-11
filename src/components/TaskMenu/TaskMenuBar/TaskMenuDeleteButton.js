import "../../../css/task_menu.css"
import {connect} from "react-redux";
import TaskDataController from "../../../modules/dataController/TaskDataController";
import AppDataController from "../../../modules/dataController/AppDataController";
import focusRecentTaskOrLast from "../../../modules/focusRecentTaskOrLast";

async function deleteTask(id) {
    if (!id) return
    AppDataController.hideTaskMenu()
    await TaskDataController.deleteTask(id)
    focusRecentTaskOrLast()

}

function TaskMenuDeleteButton({activeTask}) {


    return (
        <button
            className="task-menu-delete-button"
            onClick={() => deleteTask(activeTask)}
            aria-label="Delete Selected Task"
        >
            Delete
        </button>
    )
}


function stateProps(state) {
    return {
        activeTask:state.tasks.activeTask
    }
}


export default connect(stateProps)(TaskMenuDeleteButton)



