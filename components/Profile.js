import React, { Component } from "react";

// NativeBase Components
import { Card, CardItem, Text, Button, View } from "native-base";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Redirect } from "react-router-native";

import store from "../stores/store";

class Profile extends Component {
  // componentDidMount(){
  //   // const theID = this.props.match.params.id
  //   // store.getUserProfile()
  // }

  render() {
    if (!authStore.user) return <Redirect to="/register" />;

    return (
      <Card>
        <CardItem>
          <Text>{authStore.user.username}</Text>
          <Button danger onPress={() => authStore.logoutUser()}>
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Profile);
