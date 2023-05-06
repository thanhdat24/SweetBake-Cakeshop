import axios from "./axios";
const accessToken = JSON.parse(localStorage.getItem("accessToken"));
export const getAllUser = () => {
  return axios.get("api/v1/users");
};

export const updateMe = (data) => {
  return axios.put("api/v1/users/updateMe", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
