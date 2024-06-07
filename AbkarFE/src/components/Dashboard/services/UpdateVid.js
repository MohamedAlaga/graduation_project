import { API_URL } from "../../login-signup/services/API";

export const UpdateVid = async (token, url, title, description, id) => {
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

  let response = await fetch(`${API_URL}/admin/videos/${id}`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  console.log(response);
  return response;
};
