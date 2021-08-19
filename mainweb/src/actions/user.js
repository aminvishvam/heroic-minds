
import { FETCH_USER } from "./types";
import user from "../api/heroicmindsapi";


export const fetchUser = (_id) => async (dispatch) => {
    try{
    const response = await user.get(`/api/v1/user/${_id}`);
    console.log(response)
    dispatch({ type: FETCH_USER, payload: response.data });
    }catch(e){
    }
  };