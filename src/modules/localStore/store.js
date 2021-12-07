import {combineReducers, createStore} from "redux"
import rootReducer  from "./reducers"
import authReducer from "./reducers/authReducer";

combineReducers(rootReducer,authReducer)



const store = createStore(rootReducer)
export default store 