import axios from "./axios";

export const getAllUser = () => {
  return axios.get("api/v1/users");
};
