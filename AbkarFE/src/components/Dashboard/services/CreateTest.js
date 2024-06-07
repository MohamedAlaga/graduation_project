import { API_URL } from "../../login-signup/services/API";

export const CreateTest = async (token, values) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let bodyContent = {
    title: `${values.title}`,
    course_id: 1,
    questions: [
      {
        text: `${values.question1}`,
        answers: [
          { text: `${values.q1a1}` },
          { text: `${values.q1a2}` },
          { text: `${values.q1a3}` },
          { text: `${values.q1a4}` },
        ],
      },
      {
        text: `${values.question2}`,
        answers: [
          { text: `${values.q2a1}` },
          { text: `${values.q2a2}` },
          { text: `${values.q2a3}` },
          { text: `${values.q2a4}` },
        ],
      },
      {
        text: `${values.question3}`,
        answers: [
          { text: `${values.q3a1}` },
          { text: `${values.q3a2}` },
          { text: `${values.q3a3}` },
          { text: `${values.q3a4}` },
        ],
      },
      {
        text: `${values.question4}`,
        answers: [
          { text: `${values.q4a1}` },
          { text: `${values.q4a2}` },
          { text: `${values.q4a3}` },
          { text: `${values.q4a4}` },
        ],
      },
      {
        text: `${values.question5}`,
        answers: [
          { text: `${values.q5a1}` },
          { text: `${values.q5a2}` },
          { text: `${values.q5a3}` },
          { text: `${values.q5a4}` },
        ],
      },
      {
        text: `${values.question6}`,
        answers: [
          { text: `${values.q6a1}` },
          { text: `${values.q6a2}` },
          { text: `${values.q6a3}` },
          { text: `${values.q6a4}` },
        ],
      },
      {
        text: `${values.question7}`,
        answers: [
          { text: `${values.q7a1}` },
          { text: `${values.q7a2}` },
          { text: `${values.q7a3}` },
          { text: `${values.q7a4}` },
        ],
      },
      {
        text: `${values.question8}`,
        answers: [
          { text: `${values.q8a1}` },
          { text: `${values.q8a2}` },
          { text: `${values.q8a3}` },
          { text: `${values.q8a4}` },
        ],
      },
      {
        text: `${values.question9}`,
        answers: [
          { text: `${values.q9a1}` },
          { text: `${values.q9a2}` },
          { text: `${values.q9a3}` },
          { text: `${values.q9a4}` },
        ],
      },
      {
        text: `${values.question10}`,
        answers: [
          { text: `${values.q10a1}` },
          { text: `${values.q10a2}` },
          { text: `${values.q10a3}` },
          { text: `${values.q10a4}` },
        ],
      },
      {
        text: `${values.question11}`,
        answers: [
          { text: `${values.q11a1}` },
          { text: `${values.q11a2}` },
          { text: `${values.q11a3}` },
          { text: `${values.q11a4}` },
        ],
      },
      {
        text: `${values.question12}`,
        answers: [
          { text: `${values.q12a1}` },
          { text: `${values.q12a2}` },
          { text: `${values.q12a3}` },
          { text: `${values.q12a4}` },
        ],
      },
      {
        text: `${values.question13}`,
        answers: [
          { text: `${values.q13a1}` },
          { text: `${values.q13a2}` },
          { text: `${values.q13a3}` },
          { text: `${values.q13a4}` },
        ],
      },
      {
        text: `${values.question14}`,
        answers: [
          { text: `${values.q14a1}` },
          { text: `${values.q14a2}` },
          { text: `${values.q14a3}` },
          { text: `${values.q14a4}` },
        ],
      },
      {
        text: `${values.question15}`,
        answers: [
          { text: `${values.q15a1}` },
          { text: `${values.q15a2}` },
          { text: `${values.q15a3}` },
          { text: `${values.q15a4}` },
        ],
      },
      {
        text: `${values.question16}`,
        answers: [
          { text: `${values.q16a1}` },
          { text: `${values.q16a2}` },
          { text: `${values.q16a3}` },
          { text: `${values.q16a4}` },
        ],
      },
      {
        text: `${values.question17}`,
        answers: [
          { text: `${values.q17a1}` },
          { text: `${values.q17a2}` },
          { text: `${values.q17a3}` },
          { text: `${values.q17a4}` },
        ],
      },
      {
        text: `${values.question18}`,
        answers: [
          { text: `${values.q18a1}` },
          { text: `${values.q18a2}` },
          { text: `${values.q18a3}` },
          { text: `${values.q18a4}` },
        ],
      },
      {
        text: `${values.question19}`,
        answers: [
          { text: `${values.q19a1}` },
          { text: `${values.q19a2}` },
          { text: `${values.q19a3}` },
          { text: `${values.q19a4}` },
        ],
      },
      {
        text: `${values.question20}`,
        answers: [
          { text: `${values.q20a1}` },
          { text: `${values.q20a2}` },
          { text: `${values.q20a3}` },
          { text: `${values.q20a4}` },
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
