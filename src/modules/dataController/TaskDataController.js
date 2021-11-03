import { createTaskAction, deleteAllCompletedTasksAction, deleteTaskAction, toggleTaskCompletionAction, updateTaskTextAction } from "./actions"
import store from "./store.js"
class TaskDataController {
    static updateTaskText(id,text) {
            const action = updateTaskTextAction(id,text)
            store.dispatch(action)
    }

    static toggleTaskCompletion(id) {
        const action = toggleTaskCompletionAction(id)
        store.dispatch(action)
    }

    static createTask() {
        const action = createTaskAction()
        store.dispatch(action)
    }

    static deleteTask(id) {
        const action = deleteTaskAction(id)
        store.dispatch(action)
    }

    static deleteAllCompleted() {
        const action = deleteAllCompletedTasksAction()
        store.dispatch(action)
    }

    static todo() {
        return store.getState()
        .tasks.filter(task => task.isCompleted === false)
    }

    static completed() {
        return store.getState()
        .tasks.filter(task => task.isCompleted === true)
    }

    static togglePriority(id, value) {
        const action = updateTaskTextAction(id,text)
        store.dispatch(action)
    }


};


export default TaskDataController