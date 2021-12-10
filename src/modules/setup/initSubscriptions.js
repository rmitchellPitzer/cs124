import DataSyncController from "../dataController/DataSyncController"
import {USERS_COLLECTION, DEFAULT_DOC_ID} from "../localStore/constants"
import db from "../db/index"
import AuthListener from "../AuthListener";

const collectionRef = db.collection(USERS_COLLECTION)
const tasks = collectionRef.doc(DEFAULT_DOC_ID).collection("tasks")
const sortFilters = collectionRef.doc(DEFAULT_DOC_ID)

export default function () {
    DataSyncController.setTaskSubscription(tasks)
    DataSyncController.setSortSubscription(sortFilters)
    console.log("Init")
    AuthListener.init()
}