import React, { useEffect } from "react";
import MatchCard from "../matches/MatchCard";
import {
  dataFullyFetched,
  fetchMatchesAndPredictions,
} from "../../store/matches/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMatches,
  selectPredictions,
} from "../../store/matches/selectors";

export default function Voorspellingen() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);
  const predictions = useSelector(selectPredictions);

  useEffect(() => {
    dispatch(fetchMatchesAndPredictions());
  }, [dispatch]);

  if (!matches) return <p>Loading...</p>;

  const mathesToMatchCard = matches.map((match) => {
    // console.log("Match?", match.eventTimeStamp);
    return (
      <MatchCard
        key={match.id}
        fixtureId={match.id}
        homeTeamId={match.homeTeamId}
        homeTeamName={match.homeTeamName}
        homeTeamLogo={match.homeTeamLogo}
        goalsHomeTeam={match.goalsHomeTeam}
        awayTeamId={match.awayTeamId}
        awayTeamName={match.awayTeamName}
        awayTeamLogo={match.awayTeamLogo}
        goalsAwayTeam={match.goalsAwayTeam}
        eventTimestamp={match.eventTimeStamp}
        round={match.round}
        status={match.status}
      />
    );
  });

  console.log("What is matches?", matches);

  // const predictionsToMathCard = predictions.map((prediction) => {
  //   // console.log("Prediction?", prediction);
  //   return (
  //     <PredictionCard
  //       key={prediction.id}
  //       predGoalsHomeTeam={prediction.predGoalsHomeTeam}
  //       predGoalsAwayTeam={prediction.predGoalsAwayTeam}
  //       scoreId={prediction.scoreId}
  //       fixtureId={prediction.fixtureId}
  //     />
  //   );
  // });

  console.log("What is predictions?", predictions);

  return (
    <div>
      <h1>Voorspellingen</h1>
      <div>{mathesToMatchCard}</div>
    </div>
  );
}
