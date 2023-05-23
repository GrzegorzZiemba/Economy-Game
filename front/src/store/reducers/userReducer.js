import {
  LOGIN_TO_ACCOUNT,
  LOGOUT,
  ERROR_LOGIN_ACCOUNT,
  ERROR_LOGOUT_ACCOUNT,
} from "../types";

const initialState = {
  user: "",
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_TO_ACCOUNT:
      return { ...state, user: action.payload, loading: false };
    case LOGOUT:
      return { ...state, loading: false, user: "" };
    case ERROR_LOGIN_ACCOUNT:
      return { ...state, user: action.payload, loading: false };
    case ERROR_LOGOUT_ACCOUNT:
      return initialState;
    default:
      return state;
  }
}
