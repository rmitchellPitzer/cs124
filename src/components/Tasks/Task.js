import "../../css/task.css"
import TaskDataController from "../../modules/dataController/TaskDataController"
import PriorityButton from "../Priority/PriorityButton/PriorityButton";
import {connect} from "react-redux"
import AppDataController from "../../modules/dataController/AppDataController";
/*
props: {
    text:string;
    isCompleted:boolean
    id:string 
}
*/

async function shouldDeleteTaskEvent(event,id) {
    const isDelete = event.key === "Delete"
    if (isDelete)  {
        const sibling = getSibling(id)
        await TaskDataController.deleteTask(id)
        if (sibling) sibling.focus()
    }




}

function getSibling(id) {
    const task = document.getElementById(id)
    if (!task) return null
    return task.previousElementSibling
}

function openTaskMenu(id) {
    console.log("clicked")
    AppDataController.showTaskMenu()
    AppDataController.setActiveTask(id)
}

function Task(props) {
     const classes = `task-item ${props.isCompleted ? 'completed' : ''} ${props.isSelected ? 'selected-task' : ''}`
    return (
        <div
            id={props.id}
            class={classes}
            onKeyDown={(e) => shouldDeleteTaskEvent(e,props.id)}
        >
            <input 
                alt='task completion status' 
                class='checkbox' 
                type="checkbox"
                value={ props.isCompleted}
                onChange= {(e) => handleCheckBoxEvent(props.id)}
                checked= {props.isCompleted}
            />

            <p
                class='task-text'
                alt='task text'
                onClick={() => openTaskMenu(props.id)}
            >
                {props.text}
            </p>
            <PriorityButton id={props.id} priority={props.priority}/>
        </div>
    )

}

function handleTextEvent(id,event) {
    const text = event.currentTarget.value
    TaskDataController.updateTaskText(id,text)
}

function handleCheckBoxEvent(id) {
    TaskDataController.toggleTaskCompletion(id)
}

function mapToState(state,ownProps) {
    const isSelected = ownProps.id == state.priorityMenuActiveID && state.showPriorityMenu
     return {
         isSelected
     }
}

export default connect(mapToState)(Task)