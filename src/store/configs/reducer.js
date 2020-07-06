import { ADD_SCORES } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORES:
      // console.log(
      //   "reducer mathes? type:",
      //   action.type,
      //   "payload:",
      //   action.payload
      // );
      return { ...action.payload };

    default:
      return state;
  }
};
