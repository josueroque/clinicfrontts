import React, { createContext, useReducer } from "react";
import {
  getCurrentGestation,
  updateCurrentGestation,
} from "../services/apiService";

import { setCurrentGestationAction } from "./actions/actions";

export const CurrentGestationContext = createContext<Partial<any>>({});
export const updateCurrentGestationFunction = updateCurrentGestation;
export const getCurrentGestationFunction = getCurrentGestation;
export const previousGestation: any = {};
export const contextGestation: any = {};
export const setCurrentGestation = (key: string, value: any) => {};
export const setCurrentGestationFunction = async (
  key: string,
  value: any,
  dispatch: any
) => {
  dispatch({ type: "setCurrentGestation", payload: { key, value } });
  // return contextGestation;
  return;
};

export const setPreviousGestationFunction = async (
  value: any,
  dispatch: any
) => {
  dispatch({ type: "setPreviousGestation", payload: value });
  // return contextGestation;
  return;
};

export const useValues = (state: any, key: any, value: any) => {
  const [gestationValues, dispatch] = useReducer(
    currentGestationReducer,
    state
  );

  dispatch({ type: "setCurrentGestation", payload: { key, value } });
  return gestationValues;
};

const CurrentGestationProvider = (props: any) => {
  return (
    <CurrentGestationContext.Provider
      value={{
        getCurrentGestationFunction,
        updateCurrentGestationFunction,
        contextGestation,
        setCurrentGestationFunction,
      }}
    >
      {props.children}
    </CurrentGestationContext.Provider>
  );
};

export const previousGestationReducer = (state: any, action: any): any => {
  const initialState = {};
  switch (action.type) {
    case "reset":
      return initialState;

    case "setPreviousGestation":
      return action.payload;

    default:
      return state;
  }
};

export const currentGestationReducer = (state: any, action: any): any => {
  const initialState = {};

  switch (action.type) {
    case "reset":
      return initialState;

    case "setCurrentGestation":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    default:
      return state;
  }
};

export default CurrentGestationProvider;
