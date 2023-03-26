import axios from "./axios";

export const getCakeByCategory = (categoryName) => {
  return axios.get(`/api/v1/cakes/getCakeByCate?categoryName=${categoryName}`);
};
