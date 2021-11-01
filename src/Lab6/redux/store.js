import { createStore } from "redux"; 
import countReducers from "./reducers/countReducers";
export const store = createStore(countReducers);