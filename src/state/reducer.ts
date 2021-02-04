import { State } from "./state";
import { Patient } from "../types";
import { Diagnosis } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
    type: "ADD_ADDITIONAL_DATA";
    payload: Patient;
  }
  | { 
    type: "SET_DIAGNOSIS";
    payload: Diagnosis[];
  };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "ADD_ADDITIONAL_DATA":
      const patientToUpdate = Object.values(state.patients).find(patient => patient.id === action.payload.id);
      const updatedPatient: Patient = {
        ...patientToUpdate,
        ssn: action.payload.ssn,
        occupation: action.payload.occupation,
        dateOfBirth: action.payload.dateOfBirth,
        id: action.payload.id,
        name: action.payload.name,
        gender: action.payload.gender,
        entries: action.payload.entries
      };
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: updatedPatient
        }
      };
    case "SET_DIAGNOSIS":
      return {
          ...state,
          diagnoses: {
            ...action.payload.reduce(
                (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
                {}
              ),
              ...state.diagnoses
            }
          };
    default:
      return state;
  }
};

export const setPatientList = (patientList: Patient[]): Action => {
  return ({
    type: "SET_PATIENT_LIST",
    payload: patientList
  });
};

export const addPatinet = (patient: Patient): Action => {
  return ({
    type: "ADD_PATIENT",
    payload: patient
  });
};

export const addAdditionalData = (patient: Patient): Action => {
  return ({
    type: "ADD_ADDITIONAL_DATA",
    payload: patient
  });
};

export const setInitialDiagnosis = (diagnosis: Diagnosis[]): Action => {
  return ({
      type: "SET_DIAGNOSIS",
      payload: diagnosis
  });
};
