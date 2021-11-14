import { combineReducers } from "redux";
import themeReducer from './darkmode';
import userAuthReducer from "./userAuth";

const rootReducers = combineReducers({
    themeState: themeReducer,
    userAuthReducer: userAuthReducer
});

export default rootReducers