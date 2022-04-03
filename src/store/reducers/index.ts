import { combineReducers } from "redux";
import gestationReducer from "./gestation";

export const reducers = combineReducers<any>({
  gestation: gestationReducer,
});
