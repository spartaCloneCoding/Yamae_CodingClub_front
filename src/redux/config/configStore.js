import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import community from "../modules/community";


const middlewares = [thunk];
const rootReducer = combineReducers({
  // login: loginReducer,
  // signup: signupReducer,
});

const store = configureStore({
  reducer: rootReducer,
  community,
  middleware: [...middlewares],
});

export default store;
