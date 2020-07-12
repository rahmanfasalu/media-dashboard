import { Channels } from "../../interfaces/channels.type";

export const LOAD_PROGRAMS_ACTION_SUCCESS = "LOAD_PROGRAMS_ACTION_SUCCESS";
export const FETCH_PROGRAMS_ACTION = "FETCH_PROGRAMS_ACTION";

export interface fetchChannelsActionType {
  type: typeof FETCH_PROGRAMS_ACTION;
}
export interface LoadChannelsActionType {
  type: typeof LOAD_PROGRAMS_ACTION_SUCCESS;
  payload: Channels[];
}

export type channelsActionTypes =
  | LoadChannelsActionType
  | fetchChannelsActionType;
