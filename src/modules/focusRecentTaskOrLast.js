import AppDataController from "./dataController/AppDataController";

export default function focusRecentTaskOrLast() {
    const task = findAppropriateTask()
    if (!task) return focusActionButton()
    task.getElementsByClassName("task-text")[0].focus()
}

function findAppropriateTask() {
    let taskID = AppDataController.activeTask()
    const lastTask = AppDataController.getLastTask()
    const lastTaskID = !!lastTask? lastTask.id : null

    if (!taskID) {
        taskID = lastTaskID
    }

    if (!taskID) return
    const task = document.getElementById(taskID)
    if (!task) return document.getElementById(lastTaskID)
    return task
}

function focusActionButton() {
    const actionButton = document.getElementById("action-button")
    if (!actionButton) return
    actionButton.focus()
}

