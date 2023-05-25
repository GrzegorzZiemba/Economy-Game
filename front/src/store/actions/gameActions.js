import { GET_TRADER, UPGRADE_BUILDING } from "../types";

import * as api from "../../api";

export const getTrader = (token) => async (dispatch) => {
  try {
    const { data } = await api.getTrader(token);
    console.log(data + "getting trader");
    dispatch({ type: GET_TRADER, payload: data });
  } catch (e) {}
};

export const upgradeBuilding = (id, token, building) => async (dispatch) => {
  try {
    const { data } = await api.upgradeBuilding(id, token, building);
    dispatch({ type: UPGRADE_BUILDING, payload: data });
  } catch (e) {
    console.log(e);
  }
};
