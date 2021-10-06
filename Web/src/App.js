import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Meter from "./Components/Meter/Meter.jsx"

function App() {
  return (
    <Switch>
      <Route path="/risk">
          <Meter />
          </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
  );
}

export default App;
