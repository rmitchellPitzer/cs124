import {HIDE_PRIORITY_MENU, SHOW_PRIORITY_MENU} from "../../actions/menuActions";

function showPriorityMenu(state,payload) {
    return {
        ...state,
        priorityMenuActiveID: payload.id,
        showPriorityMenu:true,
        showSortMenu: false,
        showTaskMenu: false,
    }
}
function hidePriorityMenu(state) {
    return {
        ...state,
        showPriorityMenu:false,
    }
}
const initialState = {
    showPriorityMenu: false ,
    priorityMenuActiveID: null,
}

export default function priorityMenuReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_PRIORITY_MENU: return showPriorityMenu(state,action.payload)
        case HIDE_PRIORITY_MENU: return hidePriorityMenu(state)
        default:
            return state
    }
}