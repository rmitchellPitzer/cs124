import DataSyncController from "../dataController/DataSyncController"
import {COLLECTION_NAME, DEFAULT_DOC_ID} from "../dataController/constants"
import db from "../db/index"

const collectionRef = db.collection(COLLECTION_NAME)
const tasks = collectionRef.doc(DEFAULT_DOC_ID).collection("tasks")
const sortFilters = collectionRef.doc(DEFAULT_DOC_ID)

export default function () {
    DataSyncController.setTaskSubscription(tasks)
    DataSyncController.setSortSubscription(sortFilters)
}