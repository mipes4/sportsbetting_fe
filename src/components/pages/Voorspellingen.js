import React, { useEffect } from "react";
import MatchCard from "../matches/MatchCard";
import { getMatches } from "../../store/matches/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMatches } from "../../store/matches/selectors";

export default function Voorspellingen() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  const toMatchCard = matches.map((match) => {
    // console.log("Match?", match.fixture_id);
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
        eventTimestamp={match.eventTimestamp}
        round={match.round}
        status={match.status}
      />
    );
  });

  // console.log("What is matches?", matches);

  return (
    <div>
      <h1>Voorspellingen</h1>
      <div>{toMatchCard}</div>
    </div>
  );
}
