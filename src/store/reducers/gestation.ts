import {
  START_GET_GESTATION,
  GET_GESTATION_SUCCESS,
  GET_GESTATION_FAILURE,
  SET_GESTATION,
  SET_EDITED_GESTATION,
} from "../types";

const initialState = {
  editedGestation: {},
  loading: false,
  error: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_EDITED_GESTATION:
      return {
        ...state,
        editedGestation: action.payload,
      };
    case SET_GESTATION:
      return {
        ...state,
        gestation: action.payload,
      };

    case START_GET_GESTATION:
      return {
        ...state,
        loading: true,
        error: false,
        gestation: {},
      };
    case GET_GESTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        gestation: action.payload,
      };
    case GET_GESTATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        gestation: {},
      };

    default:
      return { ...state };
  }
}
