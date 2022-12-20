import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FirstReducer } from "../Reducers/FirstReducer";

export const configureStore = () => {
  return legacy_createStore(
    combineReducers({ FirstReducer }),
    composeWithDevTools()
  );
};
