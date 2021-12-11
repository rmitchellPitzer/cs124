export const HIDE_LIST_SETTINGS = "hideListSettings"
export const SHOW_LIST_SETTINGS = "showListSettings"
export const SHOW_CHANGE_NAME_MENU = "showChangeNameMenu"
export const HIDE_CHANGE_NAME_MENU = "hideChangeNameMenu"
export const UPDATE_LIST_NAME = "updateListName"
export const SHOW_DELETE_LIST_MENU = "showDeleteListMenu"
export const HIDE_DELETE_LIST_MENU = "hideDeleteListMenu"
export const SHOW_SHARE_MENU = "showShareMenu"
export const HIDE_SHARE_MENU = "hideShareMenu"
export const SHOW_SHARE_DIALOG_ONE = "showShareDialogOne"
export const HIDE_SHARE_DIALOG_ONE = "hideShareDialogOne"
export const SHOW_SHARE_DIALOG_TWO = "showShareDialogTwo"
export const HIDE_SHARE_DIALOG_TWO = "hideShareDialogTwo"
export const UPDATE_SHARE_USER = "updateShareUser"

export function updateShareUserAction(user) {
    return {type: UPDATE_SHARE_USER, user}
}

export function showShareDialogOneAction() {
    return {type: SHOW_SHARE_DIALOG_ONE}
}

export function hideShareDialogOneAction() {
    return {type: HIDE_SHARE_DIALOG_ONE}
}

export function showShareDialogTwoAction() {
    return {type: SHOW_SHARE_DIALOG_TWO}
}

export function hideShareDialogTwoAction() {
    return {type: HIDE_SHARE_DIALOG_TWO}
}

export function showShareMenuAction() {
    return {type: SHOW_SHARE_MENU}
}

export function hideShareMenuAction() {
    return {type: HIDE_SHARE_MENU}
}

export function hideDeleteListMenuAction() {
    return {type: HIDE_DELETE_LIST_MENU}
}

export function showDeleteListMenuAction() {
    return {type: SHOW_DELETE_LIST_MENU}
}

export function hideChangeNameMenuAction() {
    return {type: HIDE_CHANGE_NAME_MENU}
}

export function updateListNameAction(text) {
    return {type: UPDATE_LIST_NAME, text}
}

export function hideListSettingsAction() {
    return { type: HIDE_LIST_SETTINGS}
}

export function showListSettingsAction() {
    return {type: SHOW_LIST_SETTINGS}
}

export function showChangeNameMenuAction() {
    return {type: SHOW_CHANGE_NAME_MENU}
}
