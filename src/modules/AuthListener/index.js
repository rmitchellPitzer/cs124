import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import store from "../localStore/store"
import {updateAuthStatusAction} from "../localStore/actions/authActions";
import { USERS_COLLECTION} from "../localStore/constants";
import initSubscriptions from "../setup/initSubscriptions";
const db = firebase.firestore()

export default class AuthListener {
    static init() {
        firebase.auth().onAuthStateChanged(async user => {
            if (!user) return
            if (!(await hasUserFile(user))) await createUser(user)
            initSubscriptions()
            const action = updateAuthStatusAction(!!user)
            store.dispatch(action)
        })
    }
}


async function createUser({uid,email}) {
    await db.collection(USERS_COLLECTION)
        .doc(uid).set({
            id:uid,
            email,
            pendingRequests:[],
            sentRequestIDs: [],
        })
}

async function hasUserFile({uid}) {
    const doc = await db.collection(USERS_COLLECTION).doc(uid).get()
    return doc.exists
}