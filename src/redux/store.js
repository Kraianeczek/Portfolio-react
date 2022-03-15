import { combineReducers, createStore } from "redux"
import initialState from "./initialState";

const subreducers = {

}

const reducer = combineReducers(subreducers);
const store = createStore(
    reducer,
    initialState
);

export default store;