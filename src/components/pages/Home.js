import React, { useEffect } from "react";
import RoundCard from "../matches/RoundCard";
import { useDispatch } from "react-redux";
import { fetchRounds } from "../../store/configs/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRounds());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello world!</h1>
      {/* <RoundCard /> */}
    </div>
  );
}
