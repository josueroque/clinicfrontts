import React, { createContext, useState, useEffect, Context } from "react";
import {
  savePatient,
  saveHistory,
  saveCurrentGestation,
  getPatients,
  getPatientId,
  getHistoryId,
  getCurrentGestation,
  updatePatient,
  updateHistory,
  updateCurrentGestation,
} from "../services/apiService";

export const PatientsContext = createContext<Partial<any>>({});
export const savePatientFunction = savePatient;
export const saveHistoryFunction = saveHistory;
export const saveCurrentGestationFunction = saveCurrentGestation;
export const getPatientsFunction = getPatients;
export const updatePatientFunction = updatePatient;
export const updateHistoryFunction = updateHistory;
export const updateCurrentGestationFunction = updateCurrentGestation;
export const getPatientIdFunction = getPatientId;
export const getHistoryIdFunction = getHistoryId;
export const getCurrentGestationFunction = getCurrentGestation;

const PatientsProvider = (props: any) => {
  return (
    <PatientsContext.Provider
      value={{
        savePatientFunction,
        saveHistoryFunction,
        saveCurrentGestationFunction,
        getPatientsFunction,
        getPatientIdFunction,
        getHistoryIdFunction,
        getCurrentGestationFunction,
        updatePatientFunction,
        updateHistoryFunction,
        updateCurrentGestationFunction,
      }}
    >
      {props.children}
    </PatientsContext.Provider>
  );
};

export default PatientsProvider;
