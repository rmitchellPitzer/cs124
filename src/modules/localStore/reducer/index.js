import {combineReducers} from "redux";
import taskReducer from "./components/taskReducer";
import authReducer from "./components/authReducer";
import priorityMenuReducer from "./components/priorityMenuReducer";
import sortMenuReducer from "./components/sortMenuReducer"
import taskMenuReducer from "./components/taskMenuReducer";
import listReducer from "./components/listReducer";

export default combineReducers(
    {
        tasks:taskReducer,
        auth:authReducer,
        priority:priorityMenuReducer,
        sortMenu:sortMenuReducer,
        taskMenu:taskMenuReducer,
        lists: listReducer,
    }
)