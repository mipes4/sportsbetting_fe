export const selectMatches = (state) => {
  console.log("What returns my reducer?", state.data.fixtures);
  return state.data.fixtures;
};
