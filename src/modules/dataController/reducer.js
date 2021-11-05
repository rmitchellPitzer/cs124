/* eslint-disable no-lone-blocks */
import { v4 as uuidv4 } from 'uuid';
import {
    HIDE_MENU, HIDE_UNDO, SHOW_MENU,
    SHOW_UNDO, TOGGLE_COMPLETED_LIST, TOGGLE_TASK_COMPLETION,
    TOGGLE_TODO_LIST, UNDO_TASK, UPDATE_TASKS, UPDATE_TASK_TEXT, UPDATE_SORTING_FIELDS, TOGGLE_SORT_FIELD_MENU
} from './actions';

import sortingAlgorithm from "../sorting/sortingAlgorithm"

const initialState = {
    tasks: [],
    stack:[],
    sortingFields:[],
    showUndo: false,
    showCompleted: false,
    showTodo: true,
    showMenu: false,
    showSortMenu: false
}

function createTask(state) {
    const id = uuidv4()
    const task = {
        text:"",
        isCompleted:false,
        id,
        priority: -1,
        creationDate: Date.now()
    }
    const newState = state.tasks.map(x => x)
    newState.push(task)
    const tasks = sortingAlgorithm(state.sortingFields,newState)
    return {
        ...state,
        tasks
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
    const newTasks = state.tasks.map(x => x)
    const task = newTasks.find(task => task.id === id)
    if (!task) return state
    task.text = text

    const tasks = sortingAlgorithm(state.sortingFields,newTasks)


    return {
        ...state,
        tasks
    }
}

function toggleTaskCompletion(state,id) {
    const newTasks = state.tasks.map(x => x)
    const task = newTasks.find(task => task.id === id)
    task.isCompleted = !task.isCompleted

    return {
        ...state,
        tasks:newTasks 
    }

}

function deleteAllCompletedTasks(state) {
    const stack = state.stack.map(x => x)
    stack.push(state.tasks)

   const newTasks = state.tasks.filter(task => task.isCompleted !== true)
   return {
       ...state,
       stack,
       tasks:newTasks 
   }
}

function undoTask(state) {
    const stack = state.stack.map(x => x)

    return {
        ...state,
        tasks: stack.pop(),
        stack 
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

function showMenu(state) {
    return {
        ...state,
        showMenu: true 
        }
}

function hideMenu(state) {
    return {
        ...state,
        showMenu:false 
    }
}

function showUndo(state) {
    return {
        ...state,
        showUndo: true
    }
}

function hideUndo(state) {
    return {
        ...state,
        showUndo: false 
    }
}

function updateTasks(state,oldTasks) {
    const tasks = sortingAlgorithm(state.sortingFields,oldTasks)
    return {
        ...state,
        tasks
    }
}

function updateSortingFields(state,{sortingFields}) {
    console.log("update")
    const tasks = sortingAlgorithm(sortingFields,state.tasks)

    return {
        ...state,
        tasks,
        sortingFields
    }
}

function openSortFieldMenu(state) {
    return {
        ...state,
        showSortMenu: true

    }
}

function hideSortFieldMenu(state) {
    return {
        ...state,
        showSortMenu: false
    }
}

function toggleSortFieldMenu(state) {
    return {
        ...state,
        showSortMenu: !state.showSortMenu
    }
}

export default function toDoReducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_TASK_COMPLETION: return toggleTaskCompletion(state,action.payload.id)
        case TOGGLE_TODO_LIST: return toggleToDoList(state)
        case TOGGLE_COMPLETED_LIST: return toggleCompletedList(state)
        case SHOW_MENU: return showMenu(state)
        case HIDE_MENU: return hideMenu(state)
        case UNDO_TASK: return undoTask(state)
        case SHOW_UNDO: return showUndo(state)
        case HIDE_UNDO: return hideUndo(state)
        case UPDATE_TASKS: return updateTasks(state,action.payload.tasks)
        case UPDATE_SORTING_FIELDS: return updateSortingFields(state,action.payload)
        case TOGGLE_SORT_FIELD_MENU: return toggleSortFieldMenu(state)
        default:
            return state 
    }


}
