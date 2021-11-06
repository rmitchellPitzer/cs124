import PriorityIcon from "../PriorityIcon";
import {connect} from "react-redux"
import TaskDataController from "../../../modules/dataController/TaskDataController";



function changePriority(id,priority) {
    TaskDataController.updateTaskPriority(id,priority)
}
function PriorityItem(props) {
    return (
        <div
            className="priority-item"
            onClick={() => changePriority(props.id,props.priority)}
        >
            <span> {props.priorityText}</span>
            <PriorityIcon priority={props.priority}/>
        </div>
    )
}


function mapToState(state) {
    return {
        id: state.priorityMenuActiveID
    }
}
export default connect(mapToState)(PriorityItem)