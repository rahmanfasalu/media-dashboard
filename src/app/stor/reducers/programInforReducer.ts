import { AppStateType } from "./../../interfaces/app.state.type";
import * as types from "../actionTypes/programsActionTypes";
import initialState from "../initialState";

import { programsDetailsActionTypes } from "../actionTypes/programsActionTypes";

export default function programReducer(
  state: AppStateType = initialState,
  action: programsDetailsActionTypes
) {
  switch (action.type) {
    case types.FETCH_PROGRAMS_INFO_ACTION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
