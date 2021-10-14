import { uuid } from 'uuidv4';

const initialState = {
    tasks: []

}

function createTask(state) {
    const id = uuid()
    const task = {text:"",isCompleted:false,id}
    const newState = state.tasks.map()
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
    const task = state.tasks.find(task => task.id == id)
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
        case 'createTask':createTask(state)
        case 'deleteTask': deleteTask(state,action.payload.id)
        case 'updateTaskText': updateTaskText(state,action.payload)
        case 'toggleTaskCompletion': toggleTaskCompletion(state,action.payload.id)
        case 'deleteAllCompletedTasks': deleteAllCompletedTasks(state)
    }
}