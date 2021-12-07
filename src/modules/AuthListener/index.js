import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import store from "../localStore/store"
import {updateAuthStatusAction} from "../localStore/actions/authActions";

export default class AuthListener {
    static init() {
        firebase.auth().onAuthStateChanged(user => {
            const action = updateAuthStatusAction(!!user)
            store.dispatch(action)
        })
    }
}