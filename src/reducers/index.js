import { combineReducers } from 'redux';
import authUserReducer from "./authUserReducer";
import userIdReducer from "./userIdReducer";

export const rootReducer = combineReducers({
  authUser: authUserReducer,
  userId: userIdReducer
});