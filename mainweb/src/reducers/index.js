import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import navigationReducer from "./navigationReducer";


export default combineReducers({
    form: formReducer,
    navigation: navigationReducer
})