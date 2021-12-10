export const TOGGLE_OWNED_LISTS = "toggleOwnedLists"
export const TOGGLE_PENDING_LISTS = "togglePendingLists"
export const TOGGLE_SHARED_LISTS ="toggleSharedLists"

export const UPDATE_OWNED_LISTS = "updateOwnedLists"
export const UPDATE_SHARED_LISTS = "updateSharedLists"
export const UPDATE_PENDING_LISTS = "updatePendingLists"
export const NAV_TO_LIST = "navToList"

export function toggleOwnedListsAction() {
    return {
        type: TOGGLE_OWNED_LISTS,
    }
}

export function togglePendingListsAction() {
    return {
        type: TOGGLE_PENDING_LISTS
    }
}

export function toggleSharedListsAction() {
    return {
        type: TOGGLE_SHARED_LISTS
    }
}

export function updateOwnedListsAction(lists) {
    return {
        type: UPDATE_OWNED_LISTS,
        lists
    }
}

export function updateSharedListsAction(lists) {
    return {
        type: UPDATE_SHARED_LISTS,
        lists
    }
}

export function updatePendingListsAction(lists) {
    return {
        type: UPDATE_PENDING_LISTS,
        lists
    }
}

export function navToListAction(list) {
    return {
        type: NAV_TO_LIST,
        list
    }
}



