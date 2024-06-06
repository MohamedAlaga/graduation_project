import { API_URL } from "./API";

export const AddVideo = async (mail, pass) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: mail,
    password: pass,
  });

  let response = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  const data = await response.json();
  const isOK = response.ok;
  return { isOK, data };
};
