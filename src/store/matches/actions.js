import { apiUrlFootballDemo } from "../../config/constants";
import Axios from "axios";

export const ADD_MATCHES = "ADD_MATCHES";

export function storeMatches(data) {
  // console.log("What is my payload?", data.fixtures);
  return { type: ADD_MATCHES, payload: data.fixtures };
}

export function getMatches() {
  return async (dispatch, getState) => {
    //Eredivise is league 566, make this value dynamic later on
    const league_id = 566;
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const response = await Axios.get(
        `${proxyUrl}${apiUrlFootballDemo}/fixtures/league/${parseInt(
          league_id
        )}?timezone=Europe/London`
      );
      // console.log("what is my response?", response.data);
      dispatch(storeMatches(response.data.api));
    } catch (e) {}
  };
}
