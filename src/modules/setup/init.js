import {COLLECTION_NAME, DEFAULT_DOC_ID} from "../dataController/constants"
import db from "../db/index"
import initSubscriptions from "./initSubscriptions";
const collectionRef = db.collection(COLLECTION_NAME)

export default async function () {
    const hasDoc = (await collectionRef.doc(DEFAULT_DOC_ID).get()).exists
    if (!hasDoc) await collectionRef.doc(DEFAULT_DOC_ID).set({
        sortingFields:[],
        id:DEFAULT_DOC_ID,
    })

    initSubscriptions()
}