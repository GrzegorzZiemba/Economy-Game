import { GET_TRADER } from "../types";

import * as api from "../../api";

export const getTrader = (token) => async (dispatch) => {
  try {
    const { data } = await api.getTrader(token);
    console.log(data + "getting trader");
    dispatch({ type: GET_TRADER, payload: data });
  } catch (e) {}
};
