import {UPDATE_AUTH_STATUS} from "../../actions/authActions";

function updateAuthStatus(state,isSignedIn) {
    return {
        ...state,
        isSignedIn
    }
}

const initialState = {
    isSignedIn:false,
}

export default function authReducer(state = initialState ,action) {
    switch (action.type) {
        case UPDATE_AUTH_STATUS: return updateAuthStatus(state,action.isSignedIn)
        default:
            return state
    }
}