import { Channels } from "../../interfaces/channels.type";
import * as types from "../actionTypes/channelsActionTypes";
import { epgServices } from "../../../services/epgServices";
import { API } from "../../constants/dashboardConstants";

export const loadDataActionSuccess = (
  data: Channels[]
): types.channelsActionTypes => {
  return {
    type: types.LOAD_PROGRAMS_ACTION_SUCCESS,
    payload: data,
  };
};

export const loadDataAction = (): types.channelsActionTypes => {
  return {
    type: types.FETCH_PROGRAMS_ACTION,
  };
};

export function loadChannelData() {
  return function (dispatch: (arg0: any) => void) {
    dispatch(loadDataAction());
    epgServices.fetchEpgData(API.epg).then((data: { channels: Channels[] }) => {
      dispatch(loadDataActionSuccess(data.channels));
    });
  };
}
