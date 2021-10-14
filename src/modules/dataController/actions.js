export const CREATE_TASK = "createTask"
export const DELETE_TASK = "deleteTask"
export const UPDATE_TASK_TEXT = "updateTaskText"
export const TOGGLE_TASK_COMPLETION = "toggleTaskCompletion"
export const DELETE_ALL_COMPLETED_TASK = "deleteAllCompletedTasks"

export const createTaskAction = () => ({type:CREATE_TASK})

export const deleteTaskAction = (id) => ({type:DELETE_TASK, payload:{id}})

export const updateTaskTextAction = (id,text) => ({type: UPDAE_TASK_TEXT,payload: {id,text}})

export const toggleTaskCompletionAction = (id) => ({type: TOGGLE_TASK_COMPLETION,payload:id})

export const deleteAllCompletedTasksAction = () => ({type: DELETE_ALL_COMPLETED_TASK})