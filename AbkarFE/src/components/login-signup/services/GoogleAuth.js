import { API_URL } from "./API";

export const GoogleAuth = async () => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let response = await fetch(`${API_URL}/api/auth/google`, {
    method: "GET",
    headers: headersList,
  });

  return response;
};
