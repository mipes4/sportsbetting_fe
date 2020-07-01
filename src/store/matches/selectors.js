export const selectMatches = (state) => {
  // console.log("What returns my selector?", state.matches.data);
  return state.matches.data;
};

// Make selector with .reduce
// export const selectMatchesPerRound = (state) => {
//   console.log("What returns my selector?", state.matches.data);
// };
