import store from "../localStore/store.js"
import {
    hideDropDownMenuAction,
    hidePriorityMenuAction,
    hideTaskMenuAction, hideUndoAction, showDropDownMenuAction,
    showPriorityMenuAction,
    showTaskMenuAction, showUndoAction, toggleCompletedListAction, toggleToDoListAction, undoTaskAction
} from "../localStore/actions/menuActions";
import {hideSortFieldAction, showSortFieldAction} from "../localStore/actions/sortActions";
import {setActiveTaskAction} from "../localStore/actions/taskActions";

export default class AppDataController {

    static toggleTodoList() {
        const action = toggleToDoListAction()
        store.dispatch(action)
    }

    static activeTask() {
        return store.getState().activeTask
    }

    static showSortMenu() {
        return store.getState().showSortMenu
    }

    static hideSortMenu() {
        const action = hideSortFieldAction()
        store.dispatch(action)
    }

    static openSortFieldMenu() {
        const action = showSortFieldAction()
        store.dispatch(action)
    }

    static showToDo() {
        return store.getState().showTodo 
    }
    
    static showCompleted() {
        return store.getState().showCompleted 
    }

    static showDropDownMenu() {
        const action = showDropDownMenuAction()
        store.dispatch(action)
    }

    static closeMenu() {
        const action = hideDropDownMenuAction()
        store.dispatch(action)
    }

    static menuIsActive() {
        return store.getState().showDropDownMenu
    }

    static toggleCompletedList() {
        const action = toggleCompletedListAction()
        store.dispatch(action)
    }

    static showUndo() {
        const action = showUndoAction()
        store.dispatch(action)
    }

    static hideUndo() {
        const action = hideUndoAction()
        store.dispatch(action)
    }

    static undoTask() {
        const action = undoTaskAction()
        store.dispatch(action)
    }

    static undoIsActive() {
        return store.getState().showUndo 
    }

    static showPriorityMenu(id) {
        const action = showPriorityMenuAction(id)
        store.dispatch(action)
    }

    static hidePriorityMenu() {
        const action = hidePriorityMenuAction()
        store.dispatch(action)
    }

    static showTaskMenu() {
        const action = showTaskMenuAction()
        store.dispatch(action)
    }

    static hideTaskMenu() {
        const action = hideTaskMenuAction()
        store.dispatch(action)
    }

    static setActiveTask(id) {
        const action = setActiveTaskAction(id)
        store.dispatch(action)
    }

    static getLastTask() {
       const {tasks} = store.getState()
        const {length} = tasks
        if (length == 0) return null
        return tasks[length - 1]
    }

}