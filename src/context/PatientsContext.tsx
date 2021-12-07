import React, { createContext, useState, useEffect, Context } from "react";
import {
  savePatient,
  saveHistory,
  getPatients,
  getPatientId,
  updatePatient,
  getHistoryId,
  updateHistory,
  updateCurrentGestation,
  getCurrentGestation,
} from "../services/apiService";

export const PatientsContext = createContext<Partial<any>>({});
export const savePatientFunction = savePatient;
export const saveHistoryFunction = saveHistory;
export const getPatientsFunction = getPatients;
export const updatePatientFunction = updatePatient;
export const getPatientIdFunction = getPatientId;
export const getHistoryIdFunction = getHistoryId;
export const updateHistoryFunction = updateHistory;
export const updateCurrentGestationFunction = updateCurrentGestation;
export const getCurrentGestationFunction = getCurrentGestation;

const PatientsProvider = (props: any) => {
  return (
    <PatientsContext.Provider
      value={{
        savePatientFunction,
        saveHistoryFunction,
        getPatientsFunction,
        updatePatientFunction,
        getPatientIdFunction,
        getHistoryIdFunction,
        updateHistoryFunction,
        updateCurrentGestationFunction,
      }}
    >
      {props.children}
    </PatientsContext.Provider>
  );
};

export default PatientsProvider;
