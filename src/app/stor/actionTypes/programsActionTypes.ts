import { ProgramInfo } from "src/app/interfaces/programs.details.type";

export const FETCH_PROGRAMS_INFO_ACTION_SUCCESS =
  "FETCH_PROGRAMS_INFO_ACTION_SUCCESS";
export const FETCH_PROGRAMS_INFO_ACTION = "FETCH_PROGRAMS_INFO_ACTION";

export interface fetchProgramDetailsActionType {
  type: typeof FETCH_PROGRAMS_INFO_ACTION;
}
export interface LoadProgramDetailsActionType {
  type: typeof FETCH_PROGRAMS_INFO_ACTION_SUCCESS;
  payload: ProgramInfo;
}

export type programsDetailsActionTypes =
  | LoadProgramDetailsActionType
  | fetchProgramDetailsActionType;
