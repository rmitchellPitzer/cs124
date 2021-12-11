import {StyledFirebaseAuth} from "react-firebaseui";
import firebase from "../../modules/db/firebase"
import "firebase/compat/auth"

const uiConfig = {
    signInSuccessUrl: "/cs124",
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
}

export default function SignInScreen() {
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
}