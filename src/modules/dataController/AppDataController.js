import {
    hideMenuAction, hidePriorityMenuAction, hideSortFieldAction,
    hideUndoAction,
    showMenuAction, showPriorityMenuAction,
    showUndoAction,
    toggleCompletedListAction,
    showSortFieldAction,
    toggleToDoListAction,
    undoTaskAction, showTaskMenuAction, hideTaskMenuAction
} from "./actions.js"
import store from "./store.js"

export default class AppDataController {

    static toggleTodoList() {
        const action = toggleToDoListAction()
        store.dispatch(action)
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

    static showMenu() {
        const action = showMenuAction()
        store.dispatch(action)
    }

    static closeMenu() {
        const action = hideMenuAction()
        store.dispatch(action)
    }

    static menuIsActive() {
        return store.getState().showMenu 
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

}