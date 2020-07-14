import { combineReducers } from "redux";
import channelReducer from "./channelReducer";
import programReducer from "./programInforReducer";
export const rootReducer = combineReducers({
  channels: channelReducer,
  programInfo: programReducer,
});
