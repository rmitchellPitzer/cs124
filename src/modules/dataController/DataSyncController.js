import db from "../db/index"
import {updateSortingFieldsAction, updateTasksAction} from "./actions"
import store from "./store"

class DataSyncController {
    _db = db
    _taskSubscription = null
    _sortSubscrption = null

    setTaskSubscription(query) {
        this._taskSubscription = query.onSnapshot( snapshot => {
            const tasks = snapshot.docs.map(task => task.data())
            const action = updateTasksAction(tasks)
            store.dispatch(action)
        })
    }

    setSortSubscription(query) {
        this._sortSubscrption = query.onSnapshot(snapshot => {
            const {sortingFields} = snapshot.data()
            console.log(sortingFields)
            const action = updateSortingFieldsAction(sortingFields)
            store.dispatch(action)
        })

    }
}

export default new DataSyncController()