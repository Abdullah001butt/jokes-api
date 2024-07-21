import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import jokesReducer from "../reducers/jokes";

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
