export const HIDE_LIST_SETTINGS = "hideListSettings"
export const SHOW_LIST_SETTINGS = "showListSettings"
export const SHOW_CHANGE_NAME_MENU = "showChangeNameMenu"
export const HIDE_CHANGE_NAME_MENU = "hideChangeNameMenu"
export const UPDATE_LIST_NAME = "updateListName"
export const SHOW_DELETE_LIST_MENU = "showDeleteListMenu"
export const HIDE_DELETE_LIST_MENU = "hideDeleteListMenu"

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
