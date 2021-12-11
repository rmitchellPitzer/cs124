import {HIDE_DROPDOWN_MENU, HIDE_TASK_MENU, SHOW_DROPDOWN_MENU, SHOW_TASK_MENU} from "../../actions/menuActions";

function showTaskMenu(state) {
    return {
        ...state,
        showDropDownMenu: false,
        showPriorityMenu: false,
        showTaskMenu: true
    }
}
function hideTaskMenu(state) {
    return {
        ...state,
        showTaskMenu: false
    }
}
function showDropDownMenu(state) {
    return {
        ...state,
        showDropDownMenu: true
    }
}
function hideDropDownMenu(state) {
    return {
        ...state,
        showDropDownMenu:false
    }
}

const initialState = {
    showTaskMenu: false,
    showDropDownMenu: false
}

export default function taskMenuReducer(state = initialState,action) {
    switch (action.type) {
        case SHOW_TASK_MENU: return showTaskMenu(state)
        case HIDE_TASK_MENU: return hideTaskMenu(state)
        case SHOW_DROPDOWN_MENU: return showDropDownMenu(state)
        case HIDE_DROPDOWN_MENU: return hideDropDownMenu(state)
        default:
            return state
    }
}