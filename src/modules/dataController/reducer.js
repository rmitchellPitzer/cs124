import { v4 as uuidv4 } from 'uuid';
import { CREATE_TASK, DELETE_ALL_COMPLETED_TASK, DELETE_TASK, TOGGLE_TASK_COMPLETION, UPDATE_TASK_TEXT } from './actions';

const initialState = {
    tasks: []

}

function createTask(state) {
    const id = uuidv4()
    const task = {text:"",isCompleted:false,id}
    console.log(task)
    const newState = state.tasks.map(x => x)
    newState.push(task)

    return {
        task:newState 
    }
 
}

function deleteTask(state,id) {
    const tasks = state.tasks.filter(task => task.id !== id)
    return {
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
        tasks: newTasks
    }





}

function toggleTaskCompletion(state,id) {
    const task = state.tasks.find(task => task.id == id)
    task.isCompleted = !task.isCompleted
    const newTasks = state.tasks.filter(task => task.id != id)
    newTasks.push(task)

    return {
        tasks:newTasks 
    }

}

function deleteAllCompletedTasks(state) {
   const newTasks = state.tasks.filter(task => task.isCompleted != true)

   return {
       tasks:newTasks 
   }

}

export default function toDoReducer(state = initialState, action){
    switch (action.type){
        case CREATE_TASK:createTask(state); break;
        case DELETE_TASK: deleteTask(state,action.payload.id); break;
        case UPDATE_TASK_TEXT: updateTaskText(state,action.payload); break;
        case TOGGLE_TASK_COMPLETION: toggleTaskCompletion(state,action.payload.id); break;
        case DELETE_ALL_COMPLETED_TASK: deleteAllCompletedTasks(state); break;
        default:
            return state 
    }


}