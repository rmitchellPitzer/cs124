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

export default class ListController {

    static toggleOwnListMenu() {
        const action = toggleOwnedListsAction()
        store.dispatch(action)
    }

    static async sendShareRequest(user) {
        const target = await db.collection(USERS_COLLECTION)
            .where("email","==",user)
            .get()
        if (target.empty) return

        const {pendingRequests} = target.docs[0].data()
        const {activeList} = store.getState().lists
        const email = firebase.auth().currentUser.email
        console.log(email)
        await target.docs[0].ref.update({
            pendingRequests:[...pendingRequests,{email,title:activeList.title,listID:activeList.id}]
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