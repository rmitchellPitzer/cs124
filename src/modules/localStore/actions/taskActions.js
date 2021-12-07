export const CREATE_TASK = "createTask"
export const DELETE_TASK = "deleteTask"
export const PUSH_TASKS_TO_STACK = "pushTasksToStack"
export const POP_STACK = "popStack"
export const SET_ACTIVE_TASK = "setActiveTask"
export const UPDATE_TASKS = "updateTasks"

export const createTaskAction = () => ({type:CREATE_TASK})
export const deleteTaskAction = (id) => ({type:DELETE_TASK, payload:{id}})
export const pushTasksToStackAction = () => ({type: PUSH_TASKS_TO_STACK})
export const popStackAction = () => ({type: POP_STACK})
export const setActiveTaskAction = (id) => ({type:SET_ACTIVE_TASK,payload:{id}})
export const updateTasksAction = (tasks) => ({type:UPDATE_TASKS,payload:{tasks}})