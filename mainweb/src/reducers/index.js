import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import teamAccessReducer from "./teamAccessReducer";


export default combineReducers({
    form: formReducer,
    teamAcess: teamAccessReducer
})