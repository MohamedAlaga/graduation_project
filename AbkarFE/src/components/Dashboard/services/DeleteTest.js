import { API_URL } from "../../login-signup/services/API";

export const DeleteTest = async (token, id) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let response = await fetch(`${API_URL}/admin/tests/${id}`, {
    method: "Delete",
    headers: headersList,
  });

  console.log(response);
  return response;
};
