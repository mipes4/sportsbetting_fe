import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navigation/NavigationComponent";
import Home from "./components/pages/Home";
import Voorspellingen from "./components/pages/Voorspellingen";
import Regels from "./components/pages/Regels";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/voorspellingen" component={Voorspellingen} />
        <Route path="/regels" component={Regels} />
      </Switch>
    </div>
  );
}

export default App;
