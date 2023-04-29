import axios from "./axios";
export const getCakeByCategory = (categoryName) => {
  return axios.get(`/api/v1/cakes/getCakeByCate?categoryName=${categoryName}`);
};

export const getAllCake = (page) => {
  return axios.get(`/api/v1/cakes?page=${page}`);
};

export const getCakeDetail = (cakeName) => {
  return axios.get(`/api/v1/cakes/getCakeDetail?cakeName=${cakeName}`);
};

export const postCake = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  return axios.post("/api/v1/cakes", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editCake = (id, data) => {
  return axios.put(`api/v1/cakes/${id}`, data);
};
export const deleteCake = (id) => {
  return axios.delete(`api/v1/cakes/${id}`);
};
