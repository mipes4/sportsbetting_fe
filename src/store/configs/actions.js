import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const ADD_SCORES = "ADD_SCORES";
export const ADD_ROUNDS = "ADD_ROUNDS";

export function dataScores(data) {
  // console.log("What is my payload?", data);
  return { type: ADD_SCORES, payload: data };
}

export function dataRounds(data) {
  return { type: ADD_ROUNDS, payload: data };
}

export function fetchScores() {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/scores`);
      dispatch(dataScores(response.data));
    } catch (e) {}
  };
}

export function fetchRounds() {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/rounds`);
      // console.log("What is my response?", response);
      dispatch(dataRounds(response.data));
    } catch (e) {}
  };
}
