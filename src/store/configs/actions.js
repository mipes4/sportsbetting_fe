import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const ADD_SCORES = "ADD_SCORES";

export function dataScores(data) {
  // console.log("What is my payload?", data);
  return { type: ADD_SCORES, payload: data };
}

export function fetchScores() {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/scores`);
      dispatch(dataScores(response.data));
    } catch (e) {}
  };
}
