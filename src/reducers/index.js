import { combineReducers } from 'redux';
import authUserReducer from "./authUser/authUserReducer";
import userIdReducer from "./userId/userIdReducer";

export const rootReducer = combineReducers({
  authUser: authUserReducer,
  userId: userIdReducer
});