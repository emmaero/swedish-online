import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Logged from "../routes/Logged";
import Unlogged from "../routes/Unlogged";
interface iProp {
  isLogged: boolean;
}
export default function Browser({ isLogged }: iProp) {
  return (
    <BrowserRouter>
      <Switch>
        {isLogged ? <Logged /> : <Unlogged />}
        {/* <Route component={Landing} exact path="/landing" /> */}
      </Switch>
    </BrowserRouter>
  );
}
