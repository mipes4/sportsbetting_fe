import React, { useEffect } from "react";
import { getMatches } from "../../store/matches/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMatches } from "../../store/matches/selectors";

export default function Voorspellingen() {
  const dispatch = useDispatch();
  const matches = useSelector(selectMatches);

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  return (
    <div>
      <h1>Voorspellingen</h1>
    </div>
  );
}
