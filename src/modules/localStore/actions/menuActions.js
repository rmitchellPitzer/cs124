export const SHOW_MENU = "showMenu"
export const HIDE_MENU = "hideMenu"
export const SHOW_SORT_FIELD_MENU = "showSortFieldMenu"
export const HIDE_SORT_FIELD_MENU = "hideSortFieldMenu"
export const SHOW_PRIORITY_MENU = "showPriorityMenu"
export const HIDE_PRIORITY_MENU = "hidePriorityMenu"
export const SHOW_TASK_MENU = "showTaskMenu"
export const HIDE_TASK_MENU = "hideTaskMenu"
export const showMenuAction = () => ({type: SHOW_MENU})
export const hideMenuAction = () => ({type: HIDE_MENU})
export const showPriorityMenuAction = (id) => ({type: SHOW_PRIORITY_MENU, payload: {id}})
export const hidePriorityMenuAction = () => ({type: HIDE_PRIORITY_MENU})
export const showTaskMenuAction = () => ({type: SHOW_TASK_MENU})
export const hideTaskMenuAction = () => ({type: HIDE_TASK_MENU})