import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Covid from "./pages/Covid";
import World from "./pages/World";

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/covid-19" exact component={Covid}></Route>
            <Route path="/world" exact component={World}></Route>
        </Switch>
    );
}