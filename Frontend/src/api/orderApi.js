import axios from "./axios";
const accessToken = JSON.parse(localStorage.getItem("accessToken"));
export const createOrder = (data) => {
  return axios.post("api/v1/orders", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getOrder = () => {
  return axios.get("api/v1/orders");
};

export const getMeOrder = () => {
  return axios.get("api/v1/orders/getMeOrder", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getDetailOrder = (id) => {
  return axios.get(`api/v1/orders/${id}`);
};
