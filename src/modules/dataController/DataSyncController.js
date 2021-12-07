import db from "../db/index"
import store from "../localStore/store"
import {COLLECTION_NAME,DEFAULT_DOC_ID,TASK_SUBCOLLECTION} from "../localStore/constants"
import {updateSortingFieldsAction} from "../localStore/actions/sortActions";
import {updateTasksAction} from "../localStore/actions/taskActions";
const collectionRef = db.collection(COLLECTION_NAME)

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