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
        key={match.fixture_id}
        fixtureId={match.fixture_id}
        homeTeamId={match.homeTeam.team_id}
        homeTeamName={match.homeTeam.team_name}
        homeTeamLogo={match.homeTeam.logo}
        goalsHomeTeam={match.goalsHomeTeam}
        awayTeamId={match.awayTeam.team_id}
        awayTeamName={match.awayTeam.team_name}
        awayTeamLogo={match.awayTeam.logo}
        goalsAwayTeam={match.goalsAwayTeam}
        eventDate={match.event_date}
        eventTimestamp={match.event_timestamp}
        round={match.round}
        status={match.statusShort}
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
