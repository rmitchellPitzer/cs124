import store from "../localStore/store.js"
import db from "../db/index"
import { v4 as uuidv4 } from 'uuid';
import {TASK_SUBCOLLECTION} from "../localStore/constants"
import {popStackAction, pushTasksToStackAction} from "../localStore/actions/taskActions";
import {LIST_COLLECTION} from "../listController";
const collectionRef = db.collection(LIST_COLLECTION)

class TaskDataController {

    static async updateTaskText(id,text) {
        const task = await getTask(id)
        await task.update({
                text
            })
    } 

    static async toggleTaskCompletion(id) {
        const doc = getTask(id)
        const task = await doc.get()
        if (!task) return 
        const {isCompleted} = task.data()
        await doc.update({
            isCompleted:!isCompleted
        })
    }

    static createTask() {
        if (!getActiveListCollection()) return
        const id = uuidv4()
            getActiveListCollection()
            .collection(TASK_SUBCOLLECTION)
            .doc(id).set({
            isCompleted: false,
            text: "",
            id,
            priority: -1,
            creationDate: Date.now()
        })
        return id
    }

    static async deleteTask(id) {
        const task = await getTask(id)
        if (!task) return
        await task.delete() 
    }

    static async deleteAllCompleted() {
        if (!getActiveListCollection()) return
        const action = pushTasksToStackAction()
        store.dispatch(action)

        const tasks =
            getActiveListCollection()
            .collection(TASK_SUBCOLLECTION)
            .where("isCompleted","==",true)
            .get()

        for (const task of tasks.docs) {
            await task.ref.delete()
        }
    }

    static todo() {
        return store.getState().
        tasks.tasks.filter(task => task.isCompleted === false)
    }

    static completed() {
        return store.getState()
            .tasks.tasks.filter(task => task.isCompleted === true)
    }

    static async updateTaskPriority(id,priority) {
        const task = await  getTask(id)
        await task.update({
            priority
        })
    }

    static getTask(id) {
        return store.getState().tasks.tasks.find(task => task.id == id)
    }

    static async undoTaskDelete() {
        const stack = store.getState().tasks.stack
        const restoredState = stack.pop()
        if (!restoredState) return

        for (const task of restoredState) {
            if (!getTask(task.id).exists) {
                await updateTask(task)
            }
        }

        const action = popStackAction()
        store.dispatch(action)

    }

}



function getTask(id) {
    if (!getActiveListCollection()) return
    return getActiveListCollection().collection(TASK_SUBCOLLECTION).doc(id)
}

async function updateTask(task) {
    if (!getActiveListCollection()) return
    await getActiveListCollection().collection(TASK_SUBCOLLECTION).doc(task.id).set(task)
}

function getActiveListCollection() {
    const {activeList} = store.getState().lists
    if (!activeList) return
    return collectionRef.doc(activeList)
}

export default TaskDataController