import React from "react"
import {StyledFirebaseAuth} from "react-firebaseui";
import firebase from "firebase/compat";
import "firebase/compat/auth"

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/signedIn",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
}



function SignInScreen(props) {

    return (
        <div>

        </div>
    )
}