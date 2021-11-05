import { createTaskAction, deleteAllCompletedTasksAction, deleteTaskAction, toggleTaskCompletionAction, updateTaskTextAction } from "./actions"
import store from "./store.js"
import db from "../db/index"
import { v4 as uuidv4 } from 'uuid';
import TaskList from "../../components/Tasks/TaskList"
import {COLLECTION_NAME,DEFAULT_DOC_ID,TASK_SUBCOLLECTION} from "./constants"


const collectionRef = db.collection(COLLECTION_NAME)

async function getTask(id) {
    return await collectionRef.doc(DEFAULT_DOC_ID).collection(TASK_SUBCOLLECTION).doc(id)
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
        const task = await getTask(id)
        if (!task) return 
        const {isCompleted} = task 

        task.update({
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

    }

    static async deleteTask(id) {
        const task = await getTask(id)
        if (!task) return
        await task.delete() 
    }

    static async deleteAllCompleted() {
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
};


export default TaskDataController