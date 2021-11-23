import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"
import AppDataController from "../../modules/dataController/AppDataController"


function arialLabel({isToDo,isOpen}) {
    if (isToDo) {
        if (isOpen) return "Close To Do Section"
        return "Open To Do Section "
    }
    else {
        if (isOpen) return "Close Completed Section"
        return "Open Completed Section "
    }
}
function SectionButton(props) {
    const icon = props.isOpen ? faAngleDown : faAngleRight
    return (
        <button
            class="drop-down"
            onClick={(e) => handleOnClick(props.isToDo)}
            aria-label={arialLabel(props)}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}   

function handleOnClick(isToDo) {
    if (isToDo) {
        AppDataController.toggleTodoList()
    }
    else AppDataController.toggleCompletedList()
}

function mapToState(state,{isToDo}) {
    return {
        isOpen: 
            isToDo ? AppDataController.showToDo() 
            : AppDataController.showCompleted()
        }
}

export default connect(mapToState)(SectionButton)