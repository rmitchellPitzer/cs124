import db from "../db/index"
import store from "../localStore/store"
import {updateSortingFieldsAction} from "../localStore/actions/sortActions";
import {updateTasksAction} from "../localStore/actions/taskActions";
import {
    updateOwnedListsAction,
    updatePendingListsAction,
    updateSharedListsAction
} from "../localStore/actions/listActions";

class DataSyncController {
    _db = db
    _taskSubscription = null
    _sortSubscription = null
    _ownedListSubscription = null
    _pendingListSubscription = null
    _sharedListSubscription = null


    setPendingSubscription(query) {
        if (!!this._pendingListSubscription) this._pendingListSubscription()

        this._pendingListSubscription = query.onSnapshot(snapshot => {
            const list = snapshot.docs.map(doc => doc.data())
            console.log(list)
            store.dispatch(updatePendingListsAction(list))
        })
    }

    setSharedSubscription(query) {
        if (!!this._sharedListSubscription) this._sharedListSubscription()

        this._sharedListSubscription = query.onSnapshot(snapshot => {
            const shared = snapshot.docs.map(doc => doc.data())
            store.dispatch(updateSharedListsAction(shared))
        })
    }

    setTaskSubscription(query) {
        if (!!this._taskSubscription) this._taskSubscription()

        this._taskSubscription = query.onSnapshot( snapshot => {
            const tasks = snapshot.docs.map(task => task.data())
            const action = updateTasksAction(tasks)
            store.dispatch(action)
        })
    }

    setOwnedListSubscription(query) {
        if (!!this._ownedListSubscription) this._ownedListSubscription()

        this._ownedListSubscription = query.onSnapshot(snapshot => {
            const ownedLists = snapshot.docs.map(lists => lists.data())
            const action = updateOwnedListsAction(ownedLists)
            store.dispatch(action)
        })
    }

    setSortSubscription(query) {

        this._sortSubscrption = query.onSnapshot(snapshot => {
            const {sortingFields} = snapshot.data()
            const action = updateSortingFieldsAction(sortingFields)
            store.dispatch(action)
        })

    }

    clearTaskSub() {
        if (!!this._taskSubscription) this._taskSubscription()
        if (!!this._sortSubscrption) this._sortSubscrption()
        this._taskSubscription = null
        this._sortSubscrption = null
    }

    clearListSub() {
        if (!!this._ownedListSubscription) this._ownedListSubscription()
        this._ownedListSubscription = null
        if (!!this._sharedListSubscription) this._sharedListSubscription()
        this._sharedListSubscription = null
        if (!!this._pendingListSubscription) this._pendingListSubscription()
        this._pendingListSubscription = null
    }

    clearAll() {
        this.clearTaskSub()
        this.clearListSub()
    }
}

export default new DataSyncController()