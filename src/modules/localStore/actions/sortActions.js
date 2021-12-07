export const SHOW_SORT_FIELD_MENU = "showSortFieldMenu"
export const HIDE_SORT_FIELD_MENU = "hideSortFieldMenu"
export const UPDATE_SORTING_FIELDS = "updateSortingFields"

export const updateSortingFieldsAction = (sortingFields) => ({type: UPDATE_SORTING_FIELDS, payload: {sortingFields}})
export const showSortFieldAction = () => ({type: SHOW_SORT_FIELD_MENU})
export const hideSortFieldAction = () => ({type: HIDE_SORT_FIELD_MENU})