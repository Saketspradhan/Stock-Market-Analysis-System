import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home.jsx"


function App() {
  return (
    <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  );
}

export default App;
