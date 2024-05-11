import { API_URL } from "./API";

export const ResetPass = async (token, mail, pass, apass) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: mail,
    password: pass,
    password_confirmation: apass,
    token: token,
  });

  let response = await fetch(`${API_URL}/reset-password`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  console.log(response);

  return response.ok;
};
