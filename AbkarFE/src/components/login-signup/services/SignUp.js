import { API_URL } from "./API";

export const SignUpUser = async (name, pass, mail, phone, fatherName, age) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: name,
    password: pass,
    email: mail,
    phone: phone,
    father_name: fatherName,
    age: age,
  });

  let response = await fetch(`${API_URL}/register`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  return response.ok;
};
