import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const middlewares = [thunk];
const rootReducer = combineReducers({
  // login: loginReducer,
  // signup: signupReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
