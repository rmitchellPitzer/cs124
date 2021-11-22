import PriorityIcon from "../PriorityIcon";
import {connect} from "react-redux"
import TaskDataController from "../../../modules/dataController/TaskDataController";

function changePriority(id,priority) {
    TaskDataController.updateTaskPriority(id,priority)

}

function PriorityItem(props) {
    const isSelection = props.priority == props.selection
    const classes = isSelection ? "priority-item priority-selection"
        : "priority-item"

    return (
        <button
            className={classes}
            tabIndex={0}
            onClick={() => changePriority(props.id,props.priority)}
        >
            <span> {props.priorityText}</span>
            <PriorityIcon priority={props.priority}/>
        </button>
    )
}

function mapToState(state) {
    const id = state.priorityMenuActiveID
    const selection = state.tasks.find(task => task.id ==id).priority

    return {
        id,
        selection,
    }
}

export default connect(mapToState)(PriorityItem)