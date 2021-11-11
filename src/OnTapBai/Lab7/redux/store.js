import { combineReducers, createStore } from "redux";
import gameReduces from "./reducers/gameReducers";

const store = createStore(combineReducers({gameReduces}));
export default store;