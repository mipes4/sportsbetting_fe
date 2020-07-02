import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const ADD_MATCHES = "ADD_MATCHES";

export function dataFullyFetched(data) {
  // console.log("What is my payload?", data);
  return { type: ADD_MATCHES, payload: data };
}

export function fetchMatchesAndPredictions() {
  return async function thunk(dispatch, getState) {
    const [matchesResponse, predictionsResponse] = await Promise.all([
      Axios.get(`${apiUrl}/matches`),
      Axios.get(`${apiUrl}/predictions`),
    ]);

    // console.log("what is my mathesResponse?", matchesResponse.data);
    // console.log("What is my predictionsResponse?", predictionsResponse.data);
    dispatch(
      dataFullyFetched({
        matches: matchesResponse.data,
        predictions: predictionsResponse.data,
      })
    );
  };
}
