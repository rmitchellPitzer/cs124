import sortingAlgorithm from "../../../sorting/sortingAlgorithm";
import {
    HIDE_UNDO,
    SHOW_UNDO,
    TOGGLE_COMPLETED_LIST,
    TOGGLE_TASK_COMPLETION,
    TOGGLE_TODO_LIST,
    UNDO_TASK
} from "../../actions/menuActions";
import {POP_STACK, PUSH_TASKS_TO_STACK, SET_ACTIVE_TASK, UPDATE_TASKS} from "../../actions/taskActions";
const initialState = {
    tasks: [],
    stack: [],
    showTodo: false,
    showCompleted: false,
    activeTask: null,
    showUndo: false,
}

function updateTasks(state,oldTasks) {
    const tasks = sortingAlgorithm(state.sortingFields,oldTasks)
    return {
        ...state,
        tasks
    }
}
function setActiveTask(state,activeTask) {
    return {
        ...state,
        activeTask
    }
}
function popStack(state) {
    const stack = [...state.stack]
    stack.pop()

    return {
        ...state,
        stack
    }
}
function pushTasksToStack(state) {
    const stack = [...state.stack]
    stack.push(state.tasks)

    return {
        ...state,
        stack,
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
function toggleTaskCompletion(state,id) {
    const newTasks = state.tasks.map(x => x)
    const task = newTasks.find(task => task.id === id)
    task.isCompleted = !task.isCompleted

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

export default function taskReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_TODO_LIST: return toggleToDoList(state)
        case TOGGLE_COMPLETED_LIST: return toggleCompletedList(state)
        case SHOW_UNDO: return showUndo(state)
        case HIDE_UNDO: return hideUndo(state)
        case UPDATE_TASKS: return updateTasks(state,action.payload.tasks)
        case SET_ACTIVE_TASK: return setActiveTask(state,action.payload.id)
        case PUSH_TASKS_TO_STACK: return pushTasksToStack(state)
        case POP_STACK: return popStack(state)
        case UNDO_TASK: return undoTask(state)
        case TOGGLE_TASK_COMPLETION: return toggleTaskCompletion(state,action.payload.id)
        default:
            return state
    }
}