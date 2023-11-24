import { baseURL } from "./baseURL"
import { storeDataInLocalStorage } from "../util/cache"

const userURL = baseURL + "/user"

export const loginRequest = async (loginValues, handleOpenErrorModal) => {
  try {
    const response = await fetch(userURL+"/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginValues),
    });
    if (response.ok) {
      const data = await response.json();
      if(data===null){
        handleOpenErrorModal("Invalid Email or Password")
        return false
      } else {
        storeDataInLocalStorage("UserAuth", data)
        return true
      }
    } else {
      console.error('Error:', response.status);
      handleOpenErrorModal("Server Error")
      return false
    }
  } catch (error) {
    console.error('Error:', error);
    handleOpenErrorModal("Network Error")
    return false
  }
};

