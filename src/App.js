import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navigation/NavigationComponent";
import Home from "./components/pages/Home";
import Voorspellingen from "./components/pages/Voorspellingen";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/voorspellingen" component={Voorspellingen} />
      </Switch>
    </div>
  );
}

export default App;
