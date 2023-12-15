import { baseURL } from "./baseURL"

const userURL = baseURL + "/quiz"

export const AnswersSubmit = async (dataAnswers) => {
  try {
    const response = await fetch(userURL+"/submit-quiz", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataAnswers),
    });
    if (response.ok) {
      alert("Quiz Saved!");
    } else {
      console.error('Error:', response.status);
      return false
    }
  } catch (error) {
    console.error('Error:', error);
    return false
  }
};

