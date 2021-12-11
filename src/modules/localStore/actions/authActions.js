export const UPDATE_AUTH_STATUS = "updateSignInStatus"

export function updateAuthStatusAction(isSignedIn) {
    return {
        type: UPDATE_AUTH_STATUS,
        isSignedIn
    }
}

