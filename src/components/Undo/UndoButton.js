import "../../css/action_button.css"
import AppDataController from "../../modules/dataController/AppDataController"


export default function UndoButton() {
    return (
        <div class="undo">
            <p> Completed tasks cleared</p>
            <button alt="undo task clear" onClick={AppDataController.undoTask}>  Undo </button>
        </div >
    )
}


