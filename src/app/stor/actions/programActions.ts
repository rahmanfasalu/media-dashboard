import * as types from "../actionTypes/programsActionTypes";
import { epgServices } from "../../../services/epgServices";
import { ProgramInfo } from "src/app/interfaces/programs.details.type";
export const loadProgramActionSuccess = (
  data: any
): types.programsDetailsActionTypes => {
  return {
    type: types.FETCH_PROGRAMS_INFO_ACTION_SUCCESS,
    payload: data,
  };
};

export const loadProgramAction = (): types.programsDetailsActionTypes => {
  return {
    type: types.FETCH_PROGRAMS_INFO_ACTION,
  };
};

export function loadProgramDetailsActions(id: string) {
  return function (dispatch: (arg0: any) => void) {
    dispatch(loadProgramAction());
    //API.programInfo.replace("$$", id), for actual setup
    epgServices
      .fetchEpgProgramData("/programInfo")
      .then((data: ProgramInfo[]) => {
        dispatch(loadProgramActionSuccess(data[0]));
      });
  };
}
