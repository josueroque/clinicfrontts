import {
  START_GET_GESTATION,
  GET_GESTATION_SUCCESS,
  GET_GESTATION_FAILURE,
  SET_GESTATION,
} from "../types";

const initialState = {
  currentGestation: {},
  editedGestation: {},
  loading: false,
  error: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_GESTATION:
      return {
        ...state,
        GESTATION: action.payload,
      };

    case START_GET_GESTATION:
      return {
        ...state,
        loading: true,
        error: false,
        releases: [],
      };
    case GET_GESTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        gestation: action.payload.gestation,
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
