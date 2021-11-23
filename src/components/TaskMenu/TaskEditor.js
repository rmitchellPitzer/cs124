import TaskDataController from "../../modules/dataController/TaskDataController";
import {connect} from "react-redux";
import AppDataController from "../../modules/dataController/AppDataController";

async function updateActiveTask(event,id) {
    const text = event.currentTarget.value
    await TaskDataController.updateTaskText(id,text)
}
async function shouldCreateNewTask(event) {
    const isEnter = event.key === "Enter"
    const inputForm = event.currentTarget


    if (isEnter) {
        const newID = await TaskDataController.createTask()
        AppDataController.setActiveTask(newID)
        inputForm.value = ""



    }
}



function TaskEditor({activeTask,task}) {

    return (
        <div
            className="task-editor-container"
        >
          <input
              id="task-editor"
              value={task ? task.text : ""}
              autoFocus
              onKeyPress={(e) => shouldCreateNewTask(e)}
              onChange={ (e) => updateActiveTask(e,activeTask) }
          />
        </div>
    )

}

function stateMap(state) {

    return {
        activeTask:state.activeTask,
        task: TaskDataController.getTask(state.activeTask)
    }
}

export default connect(stateMap)(TaskEditor)