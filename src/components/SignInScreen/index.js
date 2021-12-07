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

export default function SignInScreen() {
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth}/>
}