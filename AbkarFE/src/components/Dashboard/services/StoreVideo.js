import { API_URL } from "../../login-signup/services/API";

export const StoreVideo = async (token, url, title, description) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    url: url,
    title: title,
    description: description,
  });

  let response = await fetch(`${API_URL}/admin/videos`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  console.log(response);
  return response;
};
