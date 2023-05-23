import axios from "axios";

const url = "http://localhost:5000";

export const loginAccount = (credentials) => {
  console.log("LoginAccount");
  console.log(credentials);
  return axios({
    method: "post",
    data: credentials,
    url: `${url}/login`,
  });
};

export const getTrader = (token) => {
  return axios({
    method: "post",
    headers: {
      Authorization: `${token}`,
    },
    url: `${url}/gettrader`,
  });
};

export const logoutAccount = (id) => {
  return axios({
    method: "post",
    data: { id },
    url: `${url}/logout`,
  });
};

export const createAccount = (credentials) => {
  return axios({
    method: "post",
    data: credentials,
    url: `${url}/register`,
  });
};
