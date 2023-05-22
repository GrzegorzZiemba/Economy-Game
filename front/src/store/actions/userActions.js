import { LOGIN_TO_ACCOUNT, ERROR_LOGIN_ACCOUNT } from "../types";

import * as api from "../../api";

export const loginAccount = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.loginAccount(credentials);
    console.log(data);
    dispatch({ type: LOGIN_TO_ACCOUNT, payload: data });
    console.log("Here");
    localStorage.setItem("userInfo", JSON.stringify(data.token));
    localStorage.setItem("userId", JSON.stringify(data.id));
  } catch (e) {
    dispatch({ type: ERROR_LOGIN_ACCOUNT, payload: "cannot login" });
  }
};
