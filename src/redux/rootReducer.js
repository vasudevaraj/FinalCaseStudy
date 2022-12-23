import { combineReducers } from "redux";
import jobsReducer from "./reducer";

const rootReducer = combineReducers({
    data: jobsReducer
})

export default rootReducer;