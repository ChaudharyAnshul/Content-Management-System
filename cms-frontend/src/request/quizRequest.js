import { baseURL } from "./baseURL"

const userURL = baseURL + "/quiz"

export const createQuizRequest = async (quizValues) => {
  try {
    const response = await fetch(userURL+"/create-quiz", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizValues),
    });
    if (response.ok) {
        return true
    } else {
      return false
    }
  } catch (error) {
    console.error('Error:', error);
    return false
  }
};

export const getQuiz = async (courseNubmer) => {
  try {
    const response = await fetch(userURL+"/get-quiz", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseNubmer),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {

      return false
    }
  } catch (error) {
    console.error('Error:', error);
    return false
  }
};

