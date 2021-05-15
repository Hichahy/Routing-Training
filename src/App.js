import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Games from "./containers/Games/Games";
import Users from "./containers/Users/Users";
import "./App.css";
import NoMatch from "./component/NoMatch/NoMatch";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul className="Link_ul">
          <li className="Link_li">
            <NavLink className="NavLink" to="/games"> Games </NavLink>
          </li>
          <li className="Link_li">
            <NavLink className="NavLink" to="/users"> Users </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/users" component={Users} />
        {/* <Route path="/courses/:courseId" component={Course} /> */}
        <Route path="/games" component={Games} />
        <Redirect from="/all-games" to="/games"/>
        <Route component={NoMatch}/>
        
      </Switch>
    </div>
  );
};

export default App;
