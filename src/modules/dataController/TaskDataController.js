import store from "../localStore/store.js"
import db from "../db/index"
import { v4 as uuidv4 } from 'uuid';
import {COLLECTION_NAME,DEFAULT_DOC_ID,TASK_SUBCOLLECTION} from "../localStore/constants"
import {popStackAction, pushTasksToStackAction} from "../localStore/actions";
const collectionRef = db.collection(COLLECTION_NAME)

 function getTask(id) {
    return collectionRef.doc(DEFAULT_DOC_ID).collection(TASK_SUBCOLLECTION).doc(id)
}


async function updateTask(task) {
    await collectionRef.doc(DEFAULT_DOC_ID).collection(TASK_SUBCOLLECTION).doc(task.id).set(task)
}
/*
Task {

    isCompleted: boolean;
    text: string;
    

}
*/
class TaskDataController {

    static async updateTaskText(id,text) {
        // DOC
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
        const id = uuidv4()
        collectionRef.doc(DEFAULT_DOC_ID).collection(TASK_SUBCOLLECTION).doc(id).set({
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
        const action = pushTasksToStackAction()
        store.dispatch(action)

        const tasks = await collectionRef
            .doc(DEFAULT_DOC_ID)
            .collection(TASK_SUBCOLLECTION)
            .where("isCompleted","==",true)
            .get()

        for (const task of tasks.docs) {
            await task.ref.delete()
        }
    }

    static todo() {
        return store.getState()
        .tasks.filter(task => task.isCompleted === false)
    }

    static completed() {
        return store.getState()
        .tasks.filter(task => task.isCompleted === true)
    }

    static async updateTaskPriority(id,priority) {
        const task = await  getTask(id)
        await task.update({
            priority
        })
    }

    static getTask(id) {
        return store.getState().tasks.find(task => task.id == id)
    }

    static async undoTaskDelete() {
        const stack = store.getState().stack
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


export default TaskDataController