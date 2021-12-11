export const SHOW_DROPDOWN_MENU = "showDropDownMenu"
export const HIDE_DROPDOWN_MENU = "hideDropDownMenu"
export const SHOW_PRIORITY_MENU = "showPriorityMenu"
export const HIDE_PRIORITY_MENU = "hidePriorityMenu"
export const SHOW_TASK_MENU = "showTaskMenu"
export const HIDE_TASK_MENU = "hideTaskMenu"
export const TOGGLE_TASK_COMPLETION = "toggleTaskCompletion"
export const TOGGLE_TODO_LIST = "toggleTodoList"
export const TOGGLE_COMPLETED_LIST = "toggleCompletedList"
export const UNDO_TASK = "undoTask"
export const SHOW_UNDO = "showUndo"
export const HIDE_UNDO = "hideUndo"

export const showUndoAction = () => ({type:SHOW_UNDO})
export const hideUndoAction = () => ({type:HIDE_UNDO})
export const undoTaskAction = () => ({type:UNDO_TASK})
export const toggleCompletedListAction = () => ({type:TOGGLE_COMPLETED_LIST})
export const toggleToDoListAction = () => ({type:TOGGLE_TODO_LIST})
export const showDropDownMenuAction = () => ({type: SHOW_DROPDOWN_MENU})
export const hideDropDownMenuAction = () => ({type: HIDE_DROPDOWN_MENU})
export const showPriorityMenuAction = (id) => ({type: SHOW_PRIORITY_MENU, payload: {id}})
export const hidePriorityMenuAction = () => ({type: HIDE_PRIORITY_MENU})
export const showTaskMenuAction = () => ({type: SHOW_TASK_MENU})
export const hideTaskMenuAction = () => ({type: HIDE_TASK_MENU})