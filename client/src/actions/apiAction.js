import axios from "axios"
import { API_REQUEST,API_SUCCESS,API_FAIL } from "../constants/userConstants"

export const postimage=(userdata)=> async (dispatch, getState) => {
    console.log(userdata);
    try {
      dispatch({ type:API_REQUEST });
      const  {data}  = await axios.post(`https://api.cloudinary.com/v1_1/degu3b9yz/image/upload`,userdata);
  
      dispatch({ type:API_SUCCESS, payload:data.url});
      console.log(data);
      
    } catch (error) {
      dispatch({ type:API_FAIL, payload: error.response.data});
      console.log(error.response.data);
    }
    
  };



  