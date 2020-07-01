import { ADD_MATCHES } from "./actions";

const initialState = {
  fixtures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCHES:
      console.log("reducer? type:", action.type, "payload:", action.payload);
      return { ...state, fixtures: action.payload };
    default:
      return state;
  }
};
