import { baseURL } from "./baseURL"
import { storeDataInLocalStorage } from "../util/cache"

import axios from "./axios";
import { useContext } from "react";

const userURL = "/user"




export const loginRequestDemo = async (loginValues) => {
  try {
    const response  = await axios.post(userURL+"/login",JSON.stringify(loginValues),{
      headers: {'Content-Type': 'application/json'},
      withCredentials:true
    })
    console.log(response);
    storeDataInLocalStorage("UserAuth", response?.data)

    return response?.data;
   
  } catch (error) {
    console.error('Error:', error);
    // handleOpenErrorModal("Network Error")
    return false
  }
};

