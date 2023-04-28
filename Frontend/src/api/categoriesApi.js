import axios from "./axios";

export const getCategory = () => {
  return axios.get("api/v1/categories");
};

export const postCategory = (data) => {
  return axios.post("api/v1/categories", data);
};

export const deleteCategory = (id) => {
  return axios.delete(`api/v1/categories/${id}`);
};

export const getDetailCategory = (id) => {
  return axios.get(`api/v1/categories/${id}`);
};

export const editCategory = (id, data) => {
  return axios.put(`api/v1/categories/${id}`, data);
};
