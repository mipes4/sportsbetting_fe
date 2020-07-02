import React from "react";
import moment from "moment";
import { ReactComponent as Clock } from "../images/clock.svg";

export default function MatchCard(props) {
  // console.log(props.predGoalsHomeTeam);

  return (
    <div className="Card">
      {/* {props.fixtureId} */}
      <div className="CardContainer">{`${moment
        .unix(props.eventTimestamp)
        .format("DD MMMM YY h:mm uur")}`}</div>
      <div>
        {`${props.homeTeamName} `}
        <input type="number" min="0"></input>
        {` - `}
        <input type="number" min="0"></input>
        {` ${props.awayTeamName}`}
      </div>
      <Clock />
      <div>{moment.unix(props.eventTimestamp).startOf("minute").fromNow()}</div>
      <div>{`${props.homeTeamName} ${props.goalsHomeTeam} - ${props.goalsAwayTeam} ${props.awayTeamName}`}</div>
    </div>
  );
}
