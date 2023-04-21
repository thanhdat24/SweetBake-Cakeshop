import axios from "./axios";

export const createOrder = (data) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  console.log("accessToken", accessToken);
  return axios.post("api/v1/orders", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
