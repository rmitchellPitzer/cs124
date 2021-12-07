import {UPDATE_AUTH_STATUS} from "../actions/authActions";

function updateAuthStatus(state,isSignedIn) {
    return {
        ...state,
        isSignedIn
    }
}

export default function authReducer(state = {isSignedIn:false},action) {
    switch (action.type) {
        case UPDATE_AUTH_STATUS: return updateAuthStatus(state,action.isSignedIn)
        default:
            return state
    }
}