import db from "../db/index"
import store from "../localStore/store"
import {USERS_COLLECTION,DEFAULT_DOC_ID} from "../localStore/constants"
import {updateSortingFieldsAction} from "../localStore/actions/sortActions";
import {updateTasksAction} from "../localStore/actions/taskActions";
const collectionRef = db.collection(USERS_COLLECTION)

class DataSyncController {
    _db = db
    _taskSubscription = null
    _sortSubscription = null

    async initSortingFields() {
        await collectionRef.doc(DEFAULT_DOC_ID).update({sortingFields:[]})
    }

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

            const action = updateSortingFieldsAction(sortingFields)
            store.dispatch(action)
        })

    }
}

export default new DataSyncController()