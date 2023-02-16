import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import dataReducer from "./datas/reducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});
