import { combineReducers } from 'redux';
import authUserReducer from "./authUser/authUserReducer";
import userIdReducer from "./userId/userIdReducer";
import zipcodeReducer from "./zipcode/zipcodeReducer";
import activitiesReducer from "./activities/activitiesReducer";
import usernameReducer from "./username/usernameReducer";

export const rootReducer = combineReducers({
  authUser: authUserReducer,
  userId: userIdReducer,
  zipcode: zipcodeReducer,
  activities: activitiesReducer,
  username: usernameReducer
});