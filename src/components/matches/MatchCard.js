import React, { useState } from "react";
import moment from "moment";
import logoDummy from "../images/logoDummy.png";
import { ReactComponent as Clock } from "../images/clock.svg";
import { useDispatch } from "react-redux";
import { postPrediction } from "../../store/predictions/actions";
import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";

export default function MatchCard(props) {
  const dispatch = useDispatch();
  const [goalsHomeTeam, setGoalsHomeTeam] = useState();
  const [goalsAwayTeam, setGoalsAwayTeam] = useState();

  const savePrediction = (event) => {
    // if ((props.predictions = [])) {
    dispatch(
      postPrediction(goalsHomeTeam, goalsAwayTeam, 1, 1, props.fixtureId)
    );
    // } else {
    //   dispatch(
    //     changePrediction(goalsHomeTeam, goalsAwayTeam, 1, props.fixtureId)
    //   );
    // }
  };

  // console.log(props);

  const predGoalsHomeTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsHomeTeam;
  });

  const predGoalsAwayTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsAwayTeam;
  });

  // const compareMatches = (matchA, matchB) => {
  //   return matchA.fixtureId - matchB.fixtureId;
  // };

  // const sortedMatches = props.sort(compareMatches);

  const whoWins = (homeTeam, awayTeam) => {
    if (homeTeam > awayTeam) {
      return "homeWins";
    } else if (homeTeam < awayTeam) {
      return "awayWins";
    } else {
      return "draw";
    }
  };

  const totoScore = () => {
    const resultMatch = whoWins(props.goalsHomeTeam, props.goalsAwayTeam);
    // console.log("What is resultMatch?", resultMatch);
    const resultPred = whoWins(predGoalsHomeTeam[0], predGoalsAwayTeam[0]);
    // console.log("What is resultPred?", resultPred);

    if (resultMatch === resultPred) {
      return 5;
    } else {
      return 0;
    }
  };

  // console.log(totoScore());

  const goalsRightPredicted = (result, pred) => {
    if (result === pred) {
      return 2;
    } else {
      return 0;
    }
  };

  const goalsBonus = () => {
    const resultHome = goalsRightPredicted(
      props.goalsHomeTeam,
      predGoalsHomeTeam[0]
    );
    const resultAway = goalsRightPredicted(
      props.goalsAwayTeam,
      predGoalsAwayTeam[0]
    );

    return resultHome + resultAway;
  };

  // console.log(goalsBonus());

  const fullScore = () => {
    if (goalsBonus() === 4) {
      return 1;
    } else {
      return 0;
    }
  };

  // console.log(fullScore());

  const totalScore = totoScore() + goalsBonus() + fullScore();
  // console.log(totalScore);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Title>{props.homeTeamName}</Card.Title>
            <Card.Img variant="bottom" src={logoDummy}></Card.Img>
          </Card>
        </Col>
        <Col xs={9}>
          {" "}
          <Card>
            <Card.Title>
              {`${props.goalsHomeTeam} - ${props.goalsAwayTeam} `}
              <Clock />
              {moment.unix(props.eventTimestamp).startOf("minute").fromNow()}
            </Card.Title>
            <Card.Body>
              {/* {props.fixtureId} */}

              <Form>
                <Row>
                  <Col>
                    <Form.Control
                      type="number"
                      value={goalsHomeTeam}
                      min="0"
                      defaultValue={predGoalsHomeTeam[0]}
                      onChange={(event) => setGoalsHomeTeam(event.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="number"
                      min="0"
                      value={goalsAwayTeam}
                      defaultValue={predGoalsAwayTeam[0]}
                      onChange={(event) => setGoalsAwayTeam(event.target.value)}
                    />
                  </Col>
                  <Col>
                    <Button type="submit" onClick={savePrediction}>
                      Save
                    </Button>
                  </Col>
                  <Col>
                    <h2>{`Score: ${totalScore}`}</h2>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
            <Card.Footer>{`${moment
              .unix(props.eventTimestamp)
              .format("DD MMMM YYYY, h:mm uur")}`}</Card.Footer>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card>
            <Card.Title>{props.awayTeamName}</Card.Title>
            <Card.Img variant="bottom" src={logoDummy}></Card.Img>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
