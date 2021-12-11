import {
    HIDE_CHANGE_NAME_MENU, HIDE_DELETE_LIST_MENU,
    HIDE_LIST_SETTINGS,
    SHOW_CHANGE_NAME_MENU, SHOW_DELETE_LIST_MENU,
    SHOW_LIST_SETTINGS, UPDATE_LIST_NAME
} from "../../actions/listSettingsActions";

const initialState = {
    showListSettings:false,
    listTitle:null,
    showChangeNameMenu:false,
    showDeleteListMenu:false,
}


export default function settingsReducer(state = initialState,action) {
    switch(action.type) {
        case HIDE_LIST_SETTINGS: return hideListSettings(state)
        case SHOW_LIST_SETTINGS: return showListSettings(state)
        case SHOW_CHANGE_NAME_MENU: return showChangeNameMenu(state)
        case HIDE_CHANGE_NAME_MENU: return hideChangeNameMenu(state)
        case UPDATE_LIST_NAME: return updateListName(state,action.text)
        case SHOW_DELETE_LIST_MENU: return showDeleteListMenu(state)
        case HIDE_DELETE_LIST_MENU: return hideDeleteListMenu(state)
        default:
            return state
    }
}

function hideDeleteListMenu(state) {
    return {
        ...state,
        showDeleteListMenu: false
    }
}
function showDeleteListMenu(state) {
    return {
        ...state,
        showDeleteListMenu:true
    }
}

function updateListName(state,listTitle){
    return {
        ...state,
        listTitle,

    }
}
function hideChangeNameMenu(state) {
    return {
        ...state,
        showChangeNameMenu:false
    }
}

function showChangeNameMenu(state) {
    return {
        ...state,
        showChangeNameMenu:true
    }
}
function hideListSettings(state) {
    return {
        ...state,
        showListSettings: false,
    }
}

function showListSettings(state) {
    return {
        ...state,
        showListSettings: true,
    }
}