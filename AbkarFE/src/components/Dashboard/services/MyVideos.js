import { API_URL } from "../../login-signup/services/API";

export const MyVideos = async (token) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let response = await fetch(`${API_URL}/admin/videos`, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data.data;
};
