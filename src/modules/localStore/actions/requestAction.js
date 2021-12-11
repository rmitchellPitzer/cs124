export const SHOW_REQUEST_MENU = "showRequestMenu"
export const HIDE_REQUEST_MENU = "hideRequestMenu"
export const UPDATE_ACTIVE_REQUEST = "updateActiveRequest"
export const SHOW_REMOVE_MENU = "showRemoveMenu"
export const HIDE_REMOVE_MENU = "hideRemoveMenu"
export const UPDATE_SELECTED_USER = "updateSelectedUser"

export function updateSelectedUser(user) {
    return {
        type: UPDATE_SELECTED_USER,
        user
    }
}

export function showRemoveMenuAction() {
    return {type: SHOW_REMOVE_MENU}
}

export function hideRemoveMenuAction() {
    return {type: HIDE_REMOVE_MENU}
}


export function updateActiveRequestAction(list) {
    return {type: UPDATE_ACTIVE_REQUEST, list}
}

export function showRequestMenuAction() {
    return {
        type: SHOW_REQUEST_MENU
    }
}

export function hideRequestMenuAction() {
    return {
        type: HIDE_REQUEST_MENU
    }
}