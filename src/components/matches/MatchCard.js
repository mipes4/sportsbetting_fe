import React, { useState, useEffect } from "react";
import moment from "moment";
import logoDummy from "../images/logoDummy.png";
import { ReactComponent as Clock } from "../images/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import { postPrediction } from "../../store/predictions/actions";
import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
import { fetchScores } from "../../store/configs/actions";
import { selectScores } from "../../store/configs/selectors";
import { calculateScore } from "../../config/helperScores";

export default function MatchCard(props) {
  const dispatch = useDispatch();
  const [goalsHomeTeam, setGoalsHomeTeam] = useState();
  const [goalsAwayTeam, setGoalsAwayTeam] = useState();
  const scores = useSelector(selectScores);

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

  const predGoalsHomeTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsHomeTeam;
  });

  const predGoalsAwayTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsAwayTeam;
  });

  if (!scores) return <p>Loading...</p>;

  const totalScore = calculateScore(
    { homeTeam: props.goalsHomeTeam, awayTeam: props.goalsAwayTeam },
    { homeTeam: predGoalsHomeTeam[0], awayTeam: predGoalsAwayTeam[0] },
    scores[0]
  );

  // console.log("What are my scores?", scores[0]);

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
                    <>
                      {props.status === "FT" ? (
                        <h2>{`Score: ${totalScore}`}</h2>
                      ) : (
                        <p>geen score</p>
                      )}
                    </>
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
