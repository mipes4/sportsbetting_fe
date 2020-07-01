import React from "react";
import moment from "moment";
import { ReactComponent as Clock } from "../images/clock.svg";

export default function MatchCard(props) {
  const status = props.status;

  const timeLeft = () => {
    switch (status) {
      case "TBD":
        return;
      case "FT":
        return "gesloten";

      default:
        return "niet bekend";
    }
  };

  return (
    <div>
      <div>{`${moment
        .unix(props.eventTimestamp)
        .format("DD MMMM YY h:mm uur")}`}</div>
      <div>{`${props.homeTeamName} - ${props.awayTeamName}`}</div>
      <Clock />
      <div>{status}</div>
    </div>
  );
}
