import "../../../css/task_menu.css"
import {connect} from "react-redux";
import TaskDataController from "../../../modules/dataController/TaskDataController";
import AppDataController from "../../../modules/dataController/AppDataController";
import focusRecentTaskOrLast from "../../../modules/focusRecentTaskOrLast";

async function deleteTask(id) {
    if (!id) return
    AppDataController.hideTaskMenu()
    await TaskDataController.deleteTask(id)
    console.log("focusing")
    focusRecentTaskOrLast()

}

function TaskMenuDeleteButton({activeTask}) {


    return (
        <button
            className="task-menu-delete-button"
            onClick={() => deleteTask(activeTask)}
        >
            Delete
        </button>
    )
}


function stateProps(state) {
    return {
        activeTask:state.activeTask
    }
}


export default connect(stateProps)(TaskMenuDeleteButton)



