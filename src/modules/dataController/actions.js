export const CREATE_TASK = "createTask"
export const DELETE_TASK = "deleteTask"
export const UPDATE_TASK_TEXT = "updateTaskText"
export const TOGGLE_TASK_COMPLETION = "toggleTaskCompletion"
export const DELETE_ALL_COMPLETED_TASK = "deleteAllCompletedTasks"
export const TOGGLE_TODO_LIST = "toggleTodoList"
export const TOGGLE_COMPLETED_LIST = "toggleCompletedList"
export const SHOW_MENU = "showMenu"
export const HIDE_MENU = "hideMenu"
export const UNDO_TASK = "undoTask"
export const TOGGLE_UNDO = "showUndo"

export const toggleUndoAction = () => ({type:TOGGLE_UNDO})
export const undoTaskAction = () => ({type:UNDO_TASK})
export const showMenuAction = () => ({type:SHOW_MENU})
export const hideMenuAction = () => ({type:HIDE_MENU})
export const createTaskAction = () => ({type:CREATE_TASK})
export const deleteTaskAction = (id) => ({type:DELETE_TASK, payload:{id}})
export const updateTaskTextAction = (id,text) => ({type: UPDATE_TASK_TEXT,payload: {id,text}})
export const toggleTaskCompletionAction = (id) => ({type: TOGGLE_TASK_COMPLETION,payload:{id}})
export const deleteAllCompletedTasksAction = () => ({type: DELETE_ALL_COMPLETED_TASK})
export const toggleCompletedListAction = () => ({type:TOGGLE_COMPLETED_LIST})
export const toggleToDoListAction = () => ({type:TOGGLE_TODO_LIST})
