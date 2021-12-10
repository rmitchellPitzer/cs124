import {USERS_COLLECTION, DEFAULT_DOC_ID} from "../localStore/constants"
import db from "../db/index"
import initSubscriptions from "./initSubscriptions";
const collectionRef = db.collection(USERS_COLLECTION)

export default async function () {
    initSubscriptions()
}