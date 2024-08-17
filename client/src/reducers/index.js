import {combineReducers} from "redux"
import authreducer from "./auth"
import currentuserreducer from "./currentuser";


export default combineReducers({
    authreducer,
    currentuserreducer,

});