import { API_URL } from "../../login-signup/services/API";

export const UpdateTest = async (token, title, id) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    title: title,
  });

  let response = await fetch(`${API_URL}/admin/test/${id}/update-title`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  console.log(response);
  return response;
};
