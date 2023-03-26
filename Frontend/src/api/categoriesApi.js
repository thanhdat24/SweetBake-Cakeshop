import axios from "./axios";

export const getCategory = () => {
  return axios.get("api/v1/categories");
};
