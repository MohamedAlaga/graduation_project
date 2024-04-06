import { API_URL } from "./API";

export const ForgetPass = async (mail) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: mail,
  });

  let response = await fetch(`${API_URL}/forget-password`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  return response.ok;
};
