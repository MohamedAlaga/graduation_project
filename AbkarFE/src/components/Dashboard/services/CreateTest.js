import { API_URL } from "../../login-signup/services/API";

export const CreateTest = async (token, title, q1, a1, a2, a3, a4) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let bodyContent = {
    title: `${title}`,
    course_id: 1,
    questions: [
      {
        text: `${q1}`,
        answers: [
          { text: `${a1}` },
          { text: `${a2}` },
          { text: `${a3}` },
          { text: `${a4}` },
        ],
      },
    ],
  };

  let response = await fetch(`${API_URL}/admin/tests/create`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  console.log(response);
  return response;
};
