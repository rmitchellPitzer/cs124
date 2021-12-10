import sortingAlgorithm from "../../../sorting/sortingAlgorithm";
import {HIDE_SORT_FIELD_MENU, SHOW_SORT_FIELD_MENU, UPDATE_SORTING_FIELDS} from "../../actions/sortActions";

const initialState = {
    showSortMenu: false,
}

function hideSortFieldMenu(state) {
    return {
        ...state,
        showSortMenu: false
    }
}
function showSortFieldMenu(state) {
    return {
        ...state,
        showSortMenu: true,
        showPriorityMenu: false,
        showTaskMenu: false,
    }
}

export default function sortingReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_SORT_FIELD_MENU: return showSortFieldMenu(state)
        case HIDE_SORT_FIELD_MENU: return hideSortFieldMenu(state)
        default:
            return state
    }
}