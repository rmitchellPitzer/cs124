import {
    navToListAction,
    toggleOwnedListsAction,
    togglePendingListsAction,
    toggleSharedListsAction
} from "../localStore/actions/listActions";
import db from "../db/index"
import firebase from "../db/firebase"
import {v4 as uuidv4} from "uuid"
import store from "../localStore/store";
import DataSyncController from "../dataController/DataSyncController";
import {TASK_SUBCOLLECTION} from "../localStore/constants";

export const LIST_COLLECTION = "lists"
export default class ListController {

    static toggleOwnListMenu() {
        const action = toggleOwnedListsAction()
        store.dispatch(action)
    }

    static toggleSharedListMenu() {
        const action = toggleSharedListsAction()
        store.dispatch(action)
    }

    static togglePendingListMenu() {
        const action = togglePendingListsAction()
        store.dispatch(action)
    }

    static navToList(list) {
        const action = navToListAction(list)
        store.dispatch(action)

        DataSyncController
            .setTaskSubscription(
                db
                .collection(LIST_COLLECTION)
                .doc(list.id)
                .collection(TASK_SUBCOLLECTION)
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