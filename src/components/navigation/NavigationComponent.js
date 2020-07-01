import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationComponent() {
  return (
    <div>
      <NavLink className="PageButton" exact={true} to="/">
        Home
      </NavLink>
      <NavLink className="PageButton" exact={true} to="/voorspellingen">
        Voorspellingen
      </NavLink>
    </div>
  );
}
