import {combineReducers} from "redux";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import priorityMenuReducer from "./priorityMenuReducer";
import sortMenuReducer from "./sortMenuReducer"
import taskMenuReducer from "./taskMenuReducer";

export default combineReducers(
    taskReducer,
    authReducer,
    priorityMenuReducer,
    sortMenuReducer,
    taskMenuReducer
)