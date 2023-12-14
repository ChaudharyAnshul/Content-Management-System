import { baseURL } from "./baseURL"

const userURL = baseURL + "/course"

export const getQuiz = async (courseNubmer) => {
  try {
    const response = await fetch(userURL+"/getCourse", {
      method: 'Get',
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {

      return false
    }
  } catch (error) {
    console.error('Error:', error);
    return false
  }
};