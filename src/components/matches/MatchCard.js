import React from "react";

export default function MatchCard(props) {
  return (
    <div>
      <h1>Match</h1>
      <p>{props.fixtureId}</p>
      <p>{props.homeTeamName}</p>
    </div>
  );
}
