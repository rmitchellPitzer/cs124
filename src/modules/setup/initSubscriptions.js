import DataSyncController from "../dataController/DataSyncController"
import {USERS_COLLECTION, DEFAULT_DOC_ID} from "../localStore/constants"
import db from "../db/index"
import {LIST_COLLECTION} from "../listController";
import firebase from "../db/firebase"

export default function () {
    const owner = firebase.auth().currentUser
    if (!owner) return

    DataSyncController.setOwnedListSubscription(db.collection(LIST_COLLECTION).where("owner","==",owner.email))
    DataSyncController.setPendingSubscription(db.collection(LIST_COLLECTION).where("pendingUsers","array-contains",owner.email))
    DataSyncController.setSharedSubscription(db.collection(LIST_COLLECTION).where("usersSharedWith",'array-contains',owner.email))
}