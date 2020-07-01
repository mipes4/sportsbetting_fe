import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import NavBar from "./components/navigation/NavigationComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
