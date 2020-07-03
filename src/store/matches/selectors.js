export const selectMatches = (state) => {
  // console.log("What returns my matches selector?", state.matches.data);
  return state.matches.data;
};

// export const selectPredictions = (state) => {
//   // console.log("what returns my predictions selector?", state.predictions.data);
//   return state.predictions.data.predictions;
// };

// Make selector with .reduce
// export const selectMatchesPerRound = (state) => {
//   console.log("What returns my selector?", state.matches.data);
// };
