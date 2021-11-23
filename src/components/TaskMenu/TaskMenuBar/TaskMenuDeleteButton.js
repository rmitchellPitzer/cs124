import "../../../css/task_menu.css"
import {connect} from "react-redux";
import TaskDataController from "../../../modules/dataController/TaskDataController";

async function deleteTask(id) {
    if (!id) return
    await TaskDataController.deleteTask(id)
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



