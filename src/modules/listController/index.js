import {
    navToListAction,
    toggleOwnedListsAction,
    togglePendingListsAction,
    toggleSharedListsAction, updateActiveListNameAction
} from "../localStore/actions/listActions";
import db from "../db/index"
import firebase from "../db/firebase"
import {v4 as uuidv4} from "uuid"
import store from "../localStore/store";
import DataSyncController from "../dataController/DataSyncController";
import {TASK_SUBCOLLECTION, USERS_COLLECTION} from "../localStore/constants";
import {getActiveListCollection} from "../dataController/TaskDataController";
export const LIST_COLLECTION = "lists"
export const SHARE_COLLECTION = "requests"
const {FieldValue} = firebase.firestore

export default class ListController {

    static toggleOwnListMenu() {
        const action = toggleOwnedListsAction()
        store.dispatch(action)
    }

    static async sendShareRequest(user) {
        const doc = await getActiveListCollection().get()
        if (doc.data().owner == user) return

       await getActiveListCollection().update({
            pendingUsers: FieldValue.arrayUnion(user)
        })
    }

    static async acceptShareRequest(list) {
        const {email} = firebase.auth().currentUser

        await db.collection(LIST_COLLECTION).doc(list.id).update({
            pendingUsers: FieldValue.arrayRemove(email),
            usersSharedWith: FieldValue.arrayUnion(email)
        })

    }

    static async rejectShareRequest(list) {
        const {email} = firebase.auth().currentUser

        await db.collection(LIST_COLLECTION).doc(list.id).update({
            pendingUsers: FieldValue.arrayRemove(email)
        })
    }

    static async removeAccess(user) {
        await getActiveListCollection().update({
            usersSharedWith: FieldValue.arrayRemove(user)
        })
    }

    static toggleSharedListMenu() {
        const action = toggleSharedListsAction()
        store.dispatch(action)
    }

    static togglePendingListMenu() {
        const action = togglePendingListsAction()
        store.dispatch(action)
    }

    static async deleteActiveList() {
        DataSyncController.clearTaskSub()
        await getActiveListCollection().delete()
        store.dispatch(navToListAction(null))

    }

    static async updateListName(title) {
        await getActiveListCollection().update({
            title
        })

        store.dispatch(updateActiveListNameAction(title))
    }

    static navToList(list) {
        const action = navToListAction(list)
        store.dispatch(action)
        if (!list) return

        DataSyncController
            .setTaskSubscription(
                db
                .collection(LIST_COLLECTION)
                .doc(list.id)
                .collection(TASK_SUBCOLLECTION)
            )
        DataSyncController
            .setSortSubscription(
                db
                .collection(LIST_COLLECTION)
                .doc(list.id)

            )
    }

    static async createList(title) {
        const id = uuidv4()
        const owner = firebase.auth().currentUser
        if (!owner) return

        await db.collection(LIST_COLLECTION).doc(id).set({
            id,
            title,
            owner:owner.email,
            usersSharedWith:[],
            pendingUsers:[],
            sortingFields:[]
        })
        const taskID = uuidv4()

        await db
            .collection(LIST_COLLECTION)
            .doc(id)
            .collection(TASK_SUBCOLLECTION)
            .doc(taskID)
            .set({
                isCompleted: false,
                text: "",
                id:taskID,
                priority: -1,
                creationDate: Date.now()
            })

    }
}