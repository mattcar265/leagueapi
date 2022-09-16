import { combineReducers } from "redux";
import { reducer } from "redux-form";
import { searchbarReducer } from "./searchbarReducer";
import { selectedMatchReducer } from "./selectedMatchReducer";

export default combineReducers({
  form: reducer,
  search: searchbarReducer,
  selected: selectedMatchReducer,
});
