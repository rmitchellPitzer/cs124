import {HIDE_NEW_LIST_MENU, SHOW_NEW_LIST_MENU, UPDATE_NEW_LIST_NAME} from "../../actions/newListMenuAction";


const initialState = {
    showNewListMenu: false,
    newListName: ""
}

export default function newListMenuReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_LIST_NAME:  return updateNewListName(state,action.name)
        case SHOW_NEW_LIST_MENU: return showNewListMenu(state)
        case HIDE_NEW_LIST_MENU: return hideNewListMenu(state)
        default:
            return state
    }
}

function showNewListMenu(state) {
    return {
        ...state,
        showNewListMenu:true
    }
}

function hideNewListMenu(state) {
    return {
        ...state,
        showNewListMenu: false,
    }

}
function updateNewListName(state,newListName) {
    return {
        ...state,
        newListName
    }
}
