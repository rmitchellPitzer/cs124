import "../../css/action_button.css"
import AppDataController from "../../modules/dataController/AppDataController"
import TaskDataController from "../../modules/dataController/TaskDataController";

async function undoTask() {
    await TaskDataController.undoTaskDelete()
    AppDataController.hideUndo()
}

export default function UndoButton() {
    return (
        <div class="undo">
            <p> Completed tasks cleared</p>
            <button
                aria-label="Undo Cleared Tasks"
                alt="undo task clear"
                onClick={undoTask}
                autoFocus
            >
                Undo
            </button>
        </div >
    )
}


