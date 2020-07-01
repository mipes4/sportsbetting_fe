import React, { useEffect } from "react";
import { getMatches } from "../../store/matches/actions";
import { useDispatch } from "react-redux";

export default function Voorspellingen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  return (
    <div>
      <h1>Voorspellingen</h1>
    </div>
  );
}
