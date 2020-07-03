import React, { useState } from "react";
import moment from "moment";
import { ReactComponent as Clock } from "../images/clock.svg";
import { useDispatch } from "react-redux";
import { postPrediction } from "../../store/predictions/actions";

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

  console.log(props.predictions);

  const predGoalsHomeTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsHomeTeam;
  });

  const predGoalsAwayTeam = props.predictions.map((prediction) => {
    return prediction.predGoalsAwayTeam;
  });

  return (
    <div className="Card">
      {props.fixtureId}
      <div className="CardContainer">{`${moment
        .unix(props.eventTimestamp)
        .format("DD MMMM YY h:mm uur")}`}</div>
      <div>
        {`${props.homeTeamName} `}
        <input
          type="number"
          value={goalsHomeTeam}
          min="0"
          defaultValue={predGoalsHomeTeam[0]}
          onChange={(event) => setGoalsHomeTeam(event.target.value)}
        ></input>
        {` - `}
        <input
          type="number"
          min="0"
          value={goalsAwayTeam}
          defaultValue={predGoalsAwayTeam[0]}
          onChange={(event) => setGoalsAwayTeam(event.target.value)}
        ></input>
        {` ${props.awayTeamName}`}
      </div>
      <Clock />
      <div>{moment.unix(props.eventTimestamp).startOf("minute").fromNow()}</div>
      <div>{`${props.homeTeamName} ${props.goalsHomeTeam} - ${props.goalsAwayTeam} ${props.awayTeamName}`}</div>
      <button type="submit" onClick={savePrediction}>
        Save
      </button>
    </div>
  );
}
