import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const ADD_MATCHES = "ADD_MATCHES";

export function storeMatches(data) {
  // console.log("What is my payload?", data.fixtures);
  return { type: ADD_MATCHES, payload: data };
}

export function getMatches() {
  return async (dispatch, getState) => {
    //Eredivise is league 566, make this value dynamic later on
    try {
      const response = await Axios.get(`${apiUrl}/matches`);
      // console.log("what is my response?", response.data);
      dispatch(storeMatches(response.data));
    } catch (e) {}
  };
}
