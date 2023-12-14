import { baseURL } from "./baseURL"
import { storeDataInLocalStorage } from "../util/cache"

const userURL = baseURL + "/user"

export const AnswersSubmit = async (dataAnswers) => {
  try {
    const response = await fetch(userURL+"/answersubmit", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataAnswers),
    });
    if (response.ok) {
      const data = await response.json();
      
    } else {
      console.error('Error:', response.status);
      // handleOpenErrorModal("Server Error")
      return false
    }
  } catch (error) {
    console.error('Error:', error);
    // handleOpenErrorModal("Network Error")
    return false
  }
};

