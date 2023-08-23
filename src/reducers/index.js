import { combineReducers } from "redux";

import contactReducer from "./contact";
import shopReducer from "./shop";
import userReducer from "./user";


const rootReducer = combineReducers({
  data: contactReducer,
  shop: shopReducer,
  user: userReducer
});

export default rootReducer;
