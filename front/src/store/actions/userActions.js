import {
  LOGIN_TO_ACCOUNT,
  ERROR_LOGIN_ACCOUNT,
  ERROR_LOGOUT_ACCOUNT,
  LOGOUT,
  CREATE_ACCOUNT,
  ERROR_CREATE_ACCOUNT,
} from "../types";

import * as api from "../../api";

export const loginAccount = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.loginAccount(credentials);
    console.log(data);
    dispatch({ type: LOGIN_TO_ACCOUNT, payload: data });
    console.log("Here");
    localStorage.setItem("userInfo", JSON.stringify(data.token));
    localStorage.setItem("userId", JSON.stringify(data.id));
  } catch (error) {
    dispatch({ type: ERROR_LOGIN_ACCOUNT, payload: "cannot login" });
  }
};

export const logoutAccount = (id) => async (dispatch) => {
  try {
    const id = localStorage.getItem("userId");

    localStorage.removeItem("userInfo");
    localStorage.removeItem("userId");
    await api.logoutAccount(id);
    dispatch({ type: LOGOUT, payload: [] });
  } catch (error) {
    dispatch({ type: ERROR_LOGOUT_ACCOUNT, payload: "Cannot logut" });
  }
};
