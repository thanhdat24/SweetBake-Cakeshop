import axios from "./axios";

export const getCategory = () => {
  return axios.get("api/v1/categories");
};

export const postCategory = (data) => {
  return axios.post("api/v1/categories", data);
};
