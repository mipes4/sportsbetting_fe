import React, { useEffect } from "react";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Profiel() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <div>
      <h1>Profielpagina</h1>
    </div>
  );
}
