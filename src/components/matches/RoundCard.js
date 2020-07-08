import React from "react";
import { selectRounds } from "../../store/configs/selectors";
import { useSelector } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";
import MatchCard from "./MatchCard";

export default function RoundCard() {
  const rounds = useSelector(selectRounds);

  if (!rounds) return <p>Loading...</p>;

  // console.log("What is rounds?", rounds);
  const roundNr = rounds.map((round) => {
    return round.roundNr;
  });

  // console.log("What is oneRound?", roundNr);

  const accordion = roundNr.map((nr, i) => {
    return (
      <Card key={i}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={i}>
            {nr}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>Hello</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  return <Accordion>{accordion}</Accordion>;
}
