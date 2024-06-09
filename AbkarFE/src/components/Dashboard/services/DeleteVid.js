import { API_URL } from "../../login-signup/services/API";

export const DeleteVid = async (token, id) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let response = await fetch(`${API_URL}/admin/videos/${id}`, {
    method: "Delete",
    headers: headersList,
  });

  return response;
};
