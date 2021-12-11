import "../../css/task.css"
import TaskDataController from "../../modules/dataController/TaskDataController"
import PriorityButton from "../Priority/PriorityButton/PriorityButton";
import {connect} from "react-redux"
import AppDataController from "../../modules/dataController/AppDataController";
import focusRecentTaskOrLast from "../../modules/focusRecentTaskOrLast";
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

    AppDataController.showTaskMenu()
    AppDataController.hideSortMenu()
    AppDataController.hidePriorityMenu()
    AppDataController.setActiveTask(id)
}

function ariaLabel({priority,isCompleted,text}) {
    const priorityLevels = new Map()
        .set(0,"High Priorty")
        .set(-1,"No Priority")
        .set(1,"Medium Priority")
        .set(2,"Low Priority")

    return `Task with text ${text} has priority level ${priorityLevels.get(priority)} and is ${isCompleted ? "completed": "not completed "}`
}

function Task(props) {
     const classes = `task-item ${props.isCompleted ? 'completed' : ''} ${props.isSelected ? 'selected-task' : ''}`
    return (
        <div
            aria-label={ariaLabel(props)}
            id={props.id}
            class={classes}
            onKeyDown={(e) => shouldDeleteTaskEvent(e,props.id)}
        >
            <input 
                alt='task completion status' 
                class='checkbox'
                type="checkbox"
                aria-label={props.isCompleted ? `Mark task with text ${props.text} as to do`: `Mark task with text ${props.text} as completed `}
                value={ props.isCompleted}
                onChange= {(e) => handleCheckBoxEvent(props.id)}
                checked= {props.isCompleted}
            />

            <button
                aria-label={`To do item with text: ${props.text}`}
                class='task-text'
                alt='task text'
                onClick={() => openTaskMenu(props.id)}
            >
                {props.text}
            </button>
            <PriorityButton text={props.text} id={props.id} priority={props.priority}/>
        </div>
    )

}

function handleTextEvent(id,event) {
    const text = event.currentTarget.value
    TaskDataController.updateTaskText(id,text)
}

async function handleCheckBoxEvent(id) {
    await TaskDataController.toggleTaskCompletion(id)
    focusRecentTaskOrLast()
}


function menuIsOpen(state) {
    return state.showTaskMenu || state.showSortMenu || state.showPriorityMenu
}

function mapToState(state,ownProps) {
    const isSelected = ownProps.id == state.activeTask && menuIsOpen(state)
     return {
         isSelected
     }
}

export default connect(mapToState)(Task)