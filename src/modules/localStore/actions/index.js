import {HIDE_SORT_FIELD_MENU, SHOW_SORT_FIELD_MENU} from "./menuActions";

export const CREATE_TASK = "createTask"
export const DELETE_TASK = "deleteTask"
export const UPDATE_TASK_TEXT = "updateTaskText"
export const TOGGLE_TASK_COMPLETION = "toggleTaskCompletion"
export const PUSH_TASKS_TO_STACK = "pushTasksToStack"
export const TOGGLE_TODO_LIST = "toggleTodoList"
export const TOGGLE_COMPLETED_LIST = "toggleCompletedList"
export const UNDO_TASK = "undoTask"
export const SHOW_UNDO = "showUndo"
export const HIDE_UNDO = "hideUndo"
export const UPDATE_TASKS = "updateTasks"
export const UPDATE_SORTING_FIELDS = "updateSortingFields"
export const SET_ACTIVE_TASK = "setActiveTask"
export const POP_STACK = "popStack"

export const showUndoAction = () => ({type:SHOW_UNDO})
export const hideUndoAction = () => ({type:HIDE_UNDO})
export const undoTaskAction = () => ({type:UNDO_TASK})
export const createTaskAction = () => ({type:CREATE_TASK})
export const deleteTaskAction = (id) => ({type:DELETE_TASK, payload:{id}})
export const updateTaskTextAction = (id,text) => ({type: UPDATE_TASK_TEXT,payload: {id,text}})
export const toggleTaskCompletionAction = (id) => ({type: TOGGLE_TASK_COMPLETION,payload:{id}})
export const pushTasksToStackAction = () => ({type: PUSH_TASKS_TO_STACK})
export const toggleCompletedListAction = () => ({type:TOGGLE_COMPLETED_LIST})
export const toggleToDoListAction = () => ({type:TOGGLE_TODO_LIST})
export const updateTasksAction = (tasks) => ({type:UPDATE_TASKS,payload:{tasks}})
export const updateSortingFieldsAction = (sortingFields) => ({type:UPDATE_SORTING_FIELDS, payload: {sortingFields}})
export const showSortFieldAction = () => ({type:SHOW_SORT_FIELD_MENU})
export const hideSortFieldAction = () => ({type:HIDE_SORT_FIELD_MENU})
export const setActiveTaskAction = (id) => ({type:SET_ACTIVE_TASK,payload:{id}})
export const popStackAction = () => ({type: POP_STACK})