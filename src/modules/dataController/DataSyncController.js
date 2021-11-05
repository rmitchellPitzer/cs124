import db from "../db/index"
import { updateTasksAction } from "./actions"
import store from "./store"

class DataSyncController {
    _db = db
    _subscription = null 

    setSubscription(query) {
        this._subscription = query.onSnapshot( snapshot => {
            console.log(snapshot)
            const tasks = snapshot.docs.map(task => task.data())
            const action = updateTasksAction(tasks)
            store.dispatch(action)
        })
    }
}

export default new DataSyncController()