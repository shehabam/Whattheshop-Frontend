import React, { Component } from "react";

// NativeBase
import { Content } from "native-base";

// Component
import Login from "./Login";
import Profile from "./Profile";
import Lol from "./Lol";
import PrivateLul from "./PrivateLul";
import Detail from "./detail";
import Cart from "./Cart";

// Router
import { Route, Switch, Redirect } from "react-router-native";

// Common
import PrivateRoute from "../common/PrivateRoute";
import Carda from "./card";
import registrationForm from "./registrationForm";

class MainContent extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Route exact path="/" component={Carda} />
          <Route path="/details/:id" component={Detail} />
          <Route path="/lol" component={Lol} />
          <PrivateRoute path="/privateLul" component={PrivateLul} />
          <Route path="/register" component={registrationForm} />
          <Route path="/login" component={Login} />
          <Route path="/Cart" component={Cart} />
          <Route path="/profile/" component={Profile} />
          <Redirect to="/lol" />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;
