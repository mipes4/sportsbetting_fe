import React, { useState } from "react";
import moment from "moment";
import logoDummy from "../images/logoDummy.png";
import { ReactComponent as Clock } from "../images/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  postPrediction,
  changePrediction,
} from "../../store/predictions/actions";
import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
import { selectScores } from "../../store/configs/selectors";
import { calculateScore } from "../../config/helperScores";
import { useParams } from "react-router-dom";
import RoundCard from "./RoundCard";

export default function MatchCard(props) {
  const dispatch = useDispatch();
  const [goalsHomeTeam, setGoalsHomeTeam] = useState();
  const [goalsAwayTeam, setGoalsAwayTeam] = useState();
  const scores = useSelector(selectScores);
  const params = useParams();
  // console.log("What are my params?", params.userId);

  const id = props.predictions.map((prediction) => {
    return prediction.id;
  });

  // console.log("What is timestamp?", props.eventTimestamp);

  const savePrediction = (event) => {
    event.preventDefault();
    if (props.predictions.length === 0) {
      dispatch(
        postPrediction(
          goalsHomeTeam,
          goalsAwayTeam,
          params.userId,
          1,
          props.fixtureId
        )
      );
    } else {
      dispatch(changePrediction(goalsHomeTeam, goalsAwayTeam, id[0]));
    }
  };

  const predGoalsHomeTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsHomeTeam;
  });

  const predGoalsAwayTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsAwayTeam;
  });

  if (!scores[0]) return <p>Loading...</p>;

  const totalScore = calculateScore(
    { homeTeam: props.goalsHomeTeam, awayTeam: props.goalsAwayTeam },
    { homeTeam: predGoalsHomeTeam[0], awayTeam: predGoalsAwayTeam[0] },
    scores[0]
  );

  // console.log("What are my scores?", scores);

  console.log(Math.floor(Date.now() / 1000));

  return (
    <Container fluid>
      <Row style={{ alignItems: "center" }}>
        <Col xl="3" style={{ textAlign: "left", flexWrap: "nowrap" }}>
          {`${props.round} | ${moment
            .unix(props.eventTimestamp)
            .format("DD MMMM YYYY, h:mm uur")}`}
        </Col>
        <Col xs="1">
          <img
            style={{ width: "10px", height: "10px" }}
            src={
              props.homeTeamLogo === "Not available in demo"
                ? logoDummy
                : props.homeTeamLogo
            }
          />
        </Col>
        <Col xs="1">{props.homeTeamName}</Col>

        <Col xl="1">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Control
              style={{ width: "60px" }}
              type="number"
              min="0"
              defaultValue={predGoalsHomeTeam[0]}
              onChange={(event) => setGoalsHomeTeam(event.target.value)}
              disabled={
                Math.floor(Date.now() / 1000) > props.eventTimestamp - 300
                  ? true
                  : false
              }
            />
            &nbsp;&nbsp;-&nbsp;&nbsp;
            <Form.Control
              style={{ width: "60px" }}
              type="number"
              min="0"
              defaultValue={predGoalsAwayTeam[0]}
              onChange={(event) => setGoalsAwayTeam(event.target.value)}
              disabled={
                Math.floor(Date.now() / 1000) > props.eventTimestamp - 300
                  ? true
                  : false
              }
            />
          </div>
        </Col>

        <Col xs="1">{props.awayTeamName}</Col>
        <Col xs="1">
          <img
            style={{ width: "10px", height: "10px" }}
            src={
              props.homeTeamLogo === "Not available in demo"
                ? logoDummy
                : props.homeTeamLogo
            }
          />
        </Col>

        <Col xs="1">
          <Button type="submit" onClick={savePrediction}>
            Save
          </Button>
        </Col>
        <Col>
          <Clock />
        </Col>
        <Col xl="1">
          {Math.floor(Date.now() / 1000) > props.eventTimestamp - 300
            ? "Voorspellingen gesloten"
            : moment.unix(props.eventTimestamp).startOf("minute").fromNow()}
        </Col>
        <Col>
          {props.status === "FT" && props.predictions[0] ? (
            <p>{`Score: ${totalScore}`}</p>
          ) : (
            <p>geen score</p>
          )}
        </Col>
        <Col>{`${props.goalsHomeTeam} - ${props.goalsAwayTeam} `}</Col>
      </Row>
    </Container>
  );
}
