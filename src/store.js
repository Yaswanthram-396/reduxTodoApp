import { combineReducers, createStore } from "redux";
import todoReducer from "./reducer";


const rootReducer=combineReducers({
    todo:todoReducer
})

const store = createStore(rootReducer)
export default store;