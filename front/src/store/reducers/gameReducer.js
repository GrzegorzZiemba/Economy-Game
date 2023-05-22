import { GET_TRADER } from "../types";

const initialState = {
  trader: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRADER:
      console.log("Getting Trader");
      console.log(action.payload);
      return { ...state, trader: action.payload, loading: false };

    default:
      return state;
  }
}
