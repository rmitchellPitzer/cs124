/* eslint-disable no-lone-blocks */
import { v4 as uuidv4 } from 'uuid';
import { CREATE_TASK, DELETE_ALL_COMPLETED_TASK, DELETE_TASK, TOGGLE_COMPLETED_LIST, TOGGLE_TASK_COMPLETION, TOGGLE_TODO_LIST, UPDATE_TASK_TEXT } from './actions';

const initialState = {
    tasks: [],
    showCompleted: false,
    showTodo: true 
}

function createTask(state) {
    const id = uuidv4()
    const task = {text:"",isCompleted:false,id}
    const newState = state.tasks.map(x => x)
    newState.push(task)

    return {
        ...state,
        tasks:newState
    }
 
}

function deleteTask(state,id) {
    const tasks = state.tasks.filter(task => task.id !== id)
    return {
        ...state,
        tasks 
    }
}

function updateTaskText(state,{id,text}) {
    const task = state.tasks.find(task => task.id === id)
    if (!task) return state

    task.text = text 
    const newTasks = state.tasks.filter(task => task.id !== id)
    newTasks.push(task)

    return {
        ...state,
        tasks: newTasks
    }
}

function toggleTaskCompletion(state,id) {
    const task = state.tasks.find(task => task.id == id)
    task.isCompleted = !task.isCompleted
    const newTasks = state.tasks.filter(task => task.id != id)
    newTasks.push(task)

    return {
        ...state,
        tasks:newTasks 
    }

}

function deleteAllCompletedTasks(state) {
   const newTasks = state.tasks.filter(task => task.isCompleted !== true)
   return {
       ...state,
       tasks:newTasks 
   }
}

function toggleCompletedList(state) {
    return {
        ...state,
        showCompleted: !state.showCompleted
    }
}

function toggleToDoList(state) {
    return {
        ...state,
        showTodo: !state.showTodo 
    }
}

export default function toDoReducer(state = initialState, action){
    switch (action.type){
        case CREATE_TASK: return createTask(state)
        case DELETE_TASK: return deleteTask(state,action.payload.id)
        case UPDATE_TASK_TEXT: return updateTaskText(state,action.payload)
        case TOGGLE_TASK_COMPLETION: return toggleTaskCompletion(state,action.payload.id)
        case DELETE_ALL_COMPLETED_TASK: return deleteAllCompletedTasks(state)
        case TOGGLE_TODO_LIST: return toggleToDoList(state)
        case TOGGLE_COMPLETED_LIST: return toggleCompletedList(state)
        default:
            return state 
    }


}