import {
    HIDE_CHANGE_NAME_MENU,
    HIDE_DELETE_LIST_MENU,
    HIDE_LIST_SETTINGS,
    HIDE_SHARE_DIALOG_ONE,
    HIDE_SHARE_DIALOG_TWO,
    HIDE_SHARE_MENU,
    SHOW_CHANGE_NAME_MENU,
    SHOW_DELETE_LIST_MENU,
    SHOW_LIST_SETTINGS,
    SHOW_SHARE_DIALOG_ONE,
    SHOW_SHARE_DIALOG_TWO,
    SHOW_SHARE_MENU,
    UPDATE_LIST_NAME,
    UPDATE_SHARE_USER
} from "../../actions/listSettingsActions";

const initialState = {
    showListSettings:false,
    listTitle:null,
    showChangeNameMenu:false,
    showDeleteListMenu:false,
    showShareMenu:false,
    shareWithUser:null,
    showShareDialogOne:false,
    showShareDialogTwo:false
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
        case SHOW_SHARE_MENU: return showShareMenu(state)
        case HIDE_SHARE_MENU: return hideShareMenu(state)
        case SHOW_SHARE_DIALOG_ONE: return showShareDialogOne(state)
        case HIDE_SHARE_DIALOG_ONE: return hideShareDialogOne(state)
        case SHOW_SHARE_DIALOG_TWO: return showShareDialogTwo(state)
        case HIDE_SHARE_DIALOG_TWO: return hideShareDialogTwo(state)
        case UPDATE_SHARE_USER: return updateShareUser(state,action.user)
        default:
            return state
    }
}

function updateShareUser(state,shareWithUser){
    return {
        ...state,
        shareWithUser
    }
}

function showShareDialogTwo(state) {
    return {
        ...state,
        showShareDialogTwo:true
    }
}

function hideShareDialogTwo(state) {
    return {
        ...state,
        showShareDialogTwo:false
    }
}
function showShareDialogOne(state) {
    return {
        ...state,
        showShareDialogOne:true
    }
}

function hideShareDialogOne(state) {
    return {
        ...state,
        showShareDialogOne:false
    }
}
function showShareMenu(state) {
    return {
        ...state,
        showShareMenu:true
    }
}

function hideShareMenu(state) {
    return {
        ...state,
        showShareMenu:false
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