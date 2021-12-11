import {
    NAV_TO_LIST,
    TOGGLE_OWNED_LISTS,
    TOGGLE_PENDING_LISTS,
    TOGGLE_SHARED_LISTS, UPDATE_ACTIVE_LIST_NAME,
    UPDATE_OWNED_LISTS, UPDATE_PENDING_LISTS, UPDATE_SHARED_LISTS
} from "../../actions/listActions";
import {HIDE_REMOVE_SHARED_MENU, SHOW_REMOVE_SHARED_MENU} from "../../actions/listSettingsActions";

const initialState = {
    ownedLists:[],
    sharedLists:[],
    pendingLists:[],
    showOwnedLists:false,
    showSharedLists:false,
    showPendingLists:false,
    showListSettings:false,
    showRemoveSharedMenu:false,
    activeList: null,
}

export default function listReducer(state = initialState,action) {
    switch(action.type) {
        case TOGGLE_OWNED_LISTS: return toggleOwnedLists(state)
        case TOGGLE_SHARED_LISTS: return toggleSharedLists(state)
        case TOGGLE_PENDING_LISTS: return togglePendingLists(state)
        case UPDATE_OWNED_LISTS: return updateOwnedLists(state,action.lists)
        case UPDATE_SHARED_LISTS: return updateSharedLists(state,action.lists)
        case UPDATE_PENDING_LISTS: return updatePendingLists(state,action.lists)
        case NAV_TO_LIST: return navToList(state,action.list)
        case UPDATE_ACTIVE_LIST_NAME: return updateActiveListName(state,action.name)
        case SHOW_REMOVE_SHARED_MENU: return showRemoveSharedMenu(state)
        case HIDE_REMOVE_SHARED_MENU: return hideRemoveSharedMenu(state)
        default:
            return state
    }
}

function showRemoveSharedMenu(state) {
    return {
        ...state,
        showRemoveSharedMenu: true
    }
}

function hideRemoveSharedMenu(state) {
    return {
        ...state,
        showRemoveSharedMenu: false
    }
}
function updateActiveListName(state,title) {
    const {activeList} = state
    return {
        ...state,
        activeList: {...activeList,title}
    }
}

function navToList(state,activeList) {
    return {
        ...state,
        activeList
    }
}

function updatePendingLists(state,pendingLists) {
    return {
        ...state,
        pendingLists
    }
}

function updateSharedLists(state,sharedLists) {
    return {
        ...state,
        sharedLists
    }
}

function updateOwnedLists(state,ownedLists) {
    return {
        ...state,
        ownedLists
    }
}

function togglePendingLists(state) {
    return {
        ...state,
        showPendingLists:!state.showPendingLists
    }
}

function toggleSharedLists(state) {
    return {
        ...state,
        showSharedLists: !state.showSharedLists
    }
}

function toggleOwnedLists(state) {
    return {
        ...state,
        showOwnedLists:!state.showOwnedLists
    }
}