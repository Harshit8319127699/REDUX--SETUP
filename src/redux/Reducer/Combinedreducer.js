import { combineReducers } from "redux";
import counterReducer from "./Reducer";


const reducer=combineReducers({
    counter:counterReducer
})


export default reducer;
