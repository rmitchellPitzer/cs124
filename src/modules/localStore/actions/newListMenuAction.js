export const SHOW_NEW_LIST_MENU = "showNewListMenu"
export const HIDE_NEW_LIST_MENU = "hideNewListMenu"
export const UPDATE_NEW_LIST_NAME = "updateNewListName"


export function showNewListMenuAction() {
    return {type:SHOW_NEW_LIST_MENU}
}

export function hideNewListMenuAction() {
    return {type: HIDE_NEW_LIST_MENU}
}

export function updateNewListName(name) {
    return {type:UPDATE_NEW_LIST_NAME,name}
}