import { tasks } from "./tasks";
import { filter } from "./filter";
import { combineReducers } from "redux";

export const reducers = combineReducers({ tasks, filter });
