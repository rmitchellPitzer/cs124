import {HIDE_SORT_FIELD_MENU, SHOW_SORT_FIELD_MENU} from "../actions/menuActions";
import sortingAlgorithm from "../../sorting/sortingAlgorithm";
import {UPDATE_SORTING_FIELDS} from "../actions/sortActions";

const initialState = {
    sortingFields:[],
    showSortMenu: false,
}

function hideSortFieldMenu(state) {
    return {
        ...state,
        showSortMenu: false
    }
}
function openSortFieldMenu(state) {
    return {
        ...state,
        showSortMenu: true,
        showPriorityMenu:false,
        showTaskMenu: false,

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
function updateSortingFields(state,{sortingFields}) {
    const tasks = sortingAlgorithm(sortingFields,state.tasks)
    return {
        ...state,
        tasks,
        sortingFields
    }
}

export default function sortingReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_SORT_FIELD_MENU: return showSortFieldMenu(state)
        case HIDE_SORT_FIELD_MENU: return hideSortFieldMenu(state)
        case UPDATE_SORTING_FIELDS: return updateSortingFields(state,action.payload)

    }
}