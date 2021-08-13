import React from "react";
import { Switch, Route } from "react-router-dom";
import Add from "./Add";
import "./app.css";
import Tasks from "./Tasks";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Tasks}></Route>
        <Route exact path="/add" component={Add}></Route>
      </Switch>
    </div>
  );
}

export default App;
