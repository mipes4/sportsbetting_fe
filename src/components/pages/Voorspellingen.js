import React, { useEffect } from "react";
import MatchCard from "../matches/MatchCard";
import { fetchMatchesAndPredictions } from "../../store/matches/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMatches } from "../../store/matches/selectors";
import { fetchScores } from "../../store/configs/actions";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Voorspellingen() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);
  const params = useParams();

  const { userId } = params;
  // const userId = 1;

  useEffect(() => {
    dispatch(fetchMatchesAndPredictions(userId));
    dispatch(fetchScores());
  }, [dispatch]);

  if (!matches) return <p>Loading...</p>;

  const compareMatches = (matchA, matchB) => {
    return matchB.eventTimeStamp - matchA.eventTimeStamp;
  };

  const sortedMatches = matches.sort(compareMatches);

  const matchesToMatchCard = sortedMatches.map((match) => {
    // console.log("Match?", match);
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
        predictions={match.predictions}
      />
    );
  });

  // console.log("What is matches?", matches);

  return (
    <div>
      <h1>Voorspellingen</h1>
      {/* <Button>Sla alle voorspellingen op</Button> */}
      <div>{matchesToMatchCard}</div>
    </div>
  );
}
