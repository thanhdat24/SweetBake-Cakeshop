import axios from "./axios";

export const getCakeByCategory = (categoryName) => {
  return axios.get(`/api/v1/cakes/getCakeByCate?categoryName=${categoryName}`);
};

export const getAllCake = () => {
  return axios.get("/api/v1/cakes");
};

export const getCakeDetail = (cakeName) => {
  return axios.get(`/api/v1/cakes/getCakeDetail?cakeName=${cakeName}`);
};