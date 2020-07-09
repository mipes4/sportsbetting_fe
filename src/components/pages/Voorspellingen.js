import React, { useEffect } from "react";
import MatchCard from "../matches/MatchCard";
import { fetchMatchesAndPredictions } from "../../store/matches/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMatches } from "../../store/matches/selectors";
import { selectToken } from "../../store/user/selectors";
import { fetchScores, fetchRounds } from "../../store/configs/actions";
import { Button, Col, Container, Table } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import RoundCard from "../matches/RoundCard";
import { appLoading } from "../../store/appState/actions";

export default function Voorspellingen() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);
  const params = useParams();
  const token = useSelector(selectToken);
  const history = useHistory();

  const { userId } = params;
  // const userId = 1;
  const roundNr = 1;

  useEffect(() => {
    dispatch(fetchMatchesAndPredictions(userId, roundNr));
    dispatch(fetchScores());
    // dispatch(fetchRounds());
  }, [dispatch]);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  if (!matches) return dispatch(appLoading());

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
    <Container md={{ span: 10, offset: 1 }}>
      <h1>Voorspellingen</h1>
      {/* <div></div> */}
      {/* <Button>Sla alle voorspellingen op</Button> */}
      {/* <RoundCard /> */}
      <Table
        style={{ fontSize: 12, textAlign: "left" }}
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        responsive="xl"
      >
        <tbody> {matchesToMatchCard}</tbody>
      </Table>
    </Container>
  );
}
