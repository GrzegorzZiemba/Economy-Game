import axios from "axios";

const url = "http://localhost:5000";

export const loginAccount = (credentials) => {
  console.log("LoginAccount");
  console.log(credentials);
  return axios({
    method: "post",
    url: `${url}/login`,
    data: credentials,
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
