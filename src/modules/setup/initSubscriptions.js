import DataSyncController from "../dataController/DataSyncController"
import {USERS_COLLECTION, DEFAULT_DOC_ID} from "../localStore/constants"
import db from "../db/index"
import {LIST_COLLECTION} from "../listController";
import firebase from "../db/firebase"

const collectionRef = db.collection(USERS_COLLECTION)
const tasks = collectionRef.doc(DEFAULT_DOC_ID).collection("tasks")
const sortFilters = collectionRef.doc(DEFAULT_DOC_ID)


export default function () {
    const owner = firebase.auth().currentUser
    if (!owner) return

    DataSyncController.setOwnedListSubscription(db.collection(LIST_COLLECTION).where("owner","==",owner.email))


}