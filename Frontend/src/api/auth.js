import axios from "./axios";

export const postLogin = (user) => {
  return axios.post("/api/v1/users/login", user);
};

export const postRegister = (user) => {
  return axios.post("/api/v1/users/register", user);
};
