import db from "../db/index"
import store from "../localStore/store"
import {updateSortingFieldsAction} from "../localStore/actions/sortActions";
import {updateTasksAction} from "../localStore/actions/taskActions";
import {updateOwnedListsAction} from "../localStore/actions/listActions";

class DataSyncController {
    _db = db
    _taskSubscription = null
    _sortSubscription = null
    _ownedListSubscription = null

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
        if (this._sortSubscrption) this._sortSubscription()

        this._sortSubscrption = query.onSnapshot(snapshot => {
            const {sortingFields} = snapshot.data()
            const action = updateSortingFieldsAction(sortingFields)
            store.dispatch(action)
        })

    }


}

export default new DataSyncController()