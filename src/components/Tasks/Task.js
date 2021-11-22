import "../../css/task.css"
import TaskDataController from "../../modules/dataController/TaskDataController"
import PriorityButton from "../Priority/PriorityButton/PriorityButton";
import {connect} from "react-redux"
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

async function shouldCreateNewTaskEvent(event) {
    const isEnter = event.key === "Enter"
    if (isEnter) await TaskDataController.createTask()
    focusNewTask()
}

function focusTask(id) {
    const task = document.getElementById(id)
    if (!task) return
    task.focus()
}

function focusNewTask() {
    const tasks = document.getElementsByClassName("task-text")
    const lastTask = tasks.length - 1
    tasks[lastTask].focus()
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
            <input 
                class='task-text' 
                type='text' 
                alt='task text' 
                onChange= { (e) => handleTextEvent(props.id,e)}
                onKeyPress={ (e) => shouldCreateNewTaskEvent(e) }
                value={props.text}
            />
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