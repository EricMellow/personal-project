import { combineReducers } from 'redux';
import authUserReducer from "./authUser/authUserReducer";
import userIdReducer from "./userId/userIdReducer";
import zipcodeReducer from "./zipcode/zipcodeReducer";

export const rootReducer = combineReducers({
  authUser: authUserReducer,
  userId: userIdReducer,
  zipcode: zipcodeReducer
});