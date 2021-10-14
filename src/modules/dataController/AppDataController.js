import { showMenuAction, toggleCompletedListAction, toggleToDoListAction } from "./actions.js"
import store from "./store.js"

export default class AppDataController {

    static toggleTodoList() {
        const action = toggleToDoListAction()
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

    static menuIsActive() {
        return store.getState().showMenu 
    }

    static toggleCompletedList() {
        const action = toggleCompletedListAction()
        store.dispatch(action)
    }

}