import React, { Component } from "react";

// NativeBase
import { Content } from "native-base";

// Component
import Login from "./Login";
import Profile from "./Profile";
import Lol from "./Lol";
import PrivateLul from "./PrivateLul";
import Detail from "./detail";

// Router
import { Route, Switch, Redirect } from "react-router-native";

// Common
import PrivateRoute from "../common/PrivateRoute";
import Carda from "./card";

class MainContent extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Route exact path="/" component={Carda} />
          <Route path="/details/:id" component={Detail} />
          <Route path="/lol" component={Lol} />
          <PrivateRoute path="/privateLul" component={PrivateLul} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Redirect to="/lol" />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;

// Should comment out or remove routes your not using anymore
// And the final redirect should go to your main component instead of '/lol'
