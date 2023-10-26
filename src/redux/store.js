import { createStore, combineReducers } from "redux"
import { listReducer } from "./list";
import { modalReducer } from "./modal";

const rootReducer = combineReducers({
    list: listReducer,
    modal: modalReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;