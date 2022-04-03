import {
  START_GET_GESTATION,
  GET_GESTATION_SUCCESS,
  GET_GESTATION_FAILURE,
  SET_GESTATION,
} from "../types";

import { getCurrentGestation } from "../../services/apiService";

export const startGetGestation = () => ({
  type: START_GET_GESTATION,
});

export const getGestationSuccess = (gestation: any) => ({
  type: GET_GESTATION_SUCCESS,
  payload: gestation,
});

export const getGestationFailure = (error: any) => ({
  type: GET_GESTATION_FAILURE,
  payload: error,
});

export const setGestation = (gestation: any) => ({
  type: SET_GESTATION,
  payload: gestation,
});

export function setGestationAction(gestation: any) {
  return async (dispatch: any) => {
    debugger;
    dispatch(setGestation);
  };
}

export function getGestationAction(filter: any) {
  return async (dispatch: any) => {
    dispatch(startGetGestation());
    try {
      const response = await getCurrentGestation(filter);
      dispatch(getGestationSuccess(response.data));
    } catch (error) {
      dispatch(getGestationFailure(error));
    }
  };
}
