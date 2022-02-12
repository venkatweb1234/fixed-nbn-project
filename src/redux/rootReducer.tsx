import { combineReducers } from "redux";
import {
  getPlansReducer,
  getfivegPlansReducer,
  gethomephonePlansReducer,
} from "./reducer/planReducer";

export const rootReducer = combineReducers({
  data: getPlansReducer,
  datafiveg: getfivegPlansReducer,
  datahomephone: gethomephonePlansReducer,
});
