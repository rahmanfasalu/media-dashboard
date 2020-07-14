import * as types from "../actionTypes/channelsActionTypes";
import initialState from "../initialState";

import { channelsActionTypes } from "../actionTypes/channelsActionTypes";
import { Channels } from "../../interfaces/channels.type";

export default function channelReducer(
  state: Channels[] = initialState.channels,
  action: channelsActionTypes
) {
  switch (action.type) {
    case types.LOAD_PROGRAMS_ACTION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
