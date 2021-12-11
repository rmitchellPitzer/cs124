import {
    HIDE_REMOVE_MENU,
    HIDE_REQUEST_MENU, SHOW_REMOVE_MENU,
    SHOW_REQUEST_MENU,
    UPDATE_ACTIVE_REQUEST,
    UPDATE_SELECTED_USER
} from "../../actions/requestAction";


const initialState = {
    activeRequest: null,
    selectedUser: null,
    showRequestMenu:false,
    showRemoveMenu:false,

}

export default function requestReducer(state = initialState,action) {
    switch (action.type) {
        case SHOW_REQUEST_MENU: return showRequestMenu(state)
        case HIDE_REQUEST_MENU: return hideRequestMenu(state)
        case UPDATE_ACTIVE_REQUEST: return updateActiveRequest(state,action.list)
        case UPDATE_SELECTED_USER: return updateSelectedUser(state,action.user)
        case SHOW_REMOVE_MENU: return showRemoveMenu(state)
        case HIDE_REMOVE_MENU: return hideRemoveMenu(state)
        default:
            return state
    }
}

function showRemoveMenu(state) {
    return {
        ...state,
        showRemoveMenu:true
    }
}

function hideRemoveMenu(state) {
    return {
        ...state,
        showRemoveMenu:false
    }
}
function updateSelectedUser(state,selectedUser) {
    return {
        ...state,
        selectedUser
    }
}

function updateActiveRequest(state,activeRequest) {
    return {
        ...state,
        activeRequest
    }
}

function showRequestMenu(state) {
    return {
        ...state,
        showRequestMenu:true
    }
}

function hideRequestMenu(state) {
    return {
        ...state,
        showRequestMenu: false
    }
}