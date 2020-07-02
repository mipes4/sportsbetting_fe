import React from "react";
import moment from "moment";
import { ReactComponent as Clock } from "../images/clock.svg";
import timestamp from "unix-timestamp";

export default function MatchCard(props) {
  const status = props.status;
  const timestampNow = timestamp.now();
  // console.log("What is my timestamp now?", timestampNow);

  const timeLeft = () => {
    const timestampFuture = 1593777600;
    // return moment.unix(timestampFuture - timestampNow).format()

    moment(timestampFuture, "day").fromNow();

    // moment().subtract(timestamp).format("LTS");

    // switch (status) {
    //   case "TBD":
    //     return;
    //   case "FT":
    //     return "gesloten";
    //   default:
    //     return "niet bekend";
    // }
  };

  // console.log(props.eventTimestamp);

  return (
    <div>
      {props.fixtureId}
      <div>{`${moment
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
