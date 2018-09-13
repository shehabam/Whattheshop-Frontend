import React, { Component } from "react";

// NativeBase Components
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Redirect } from "react-router-native";

import store from "../stores/store";
import {
  Card,
  CardItem,
  Text,
  Button,
  View,
  Left,
  Right,
  Body
} from "native-base";

class Profile extends Component {
  componentDidMount() {
    store.getOrdersHistory();
  }
  render() {
    let k;
    if (!authStore.user) return <Redirect to="/register" />;
    if (!store.orderHistory) {
      return <View />;
    }
    k = store.orderHistory.map(letsee => (
      <View key={letsee.id}>
        {letsee.middleman_set.map(middleman => {
          return (
            <Text key={middleman.product.id}>{middleman.product.name}</Text>
          );
        })}
      </View>
    ));
    return (
      <Card>
        <CardItem>
          <Left>
            <Text>{authStore.user.username}</Text>
          </Left>
          <Body>{k}</Body>
          <Right>
            <Button danger onPress={() => authStore.logoutUser()}>
              <Text>Logout</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Profile);
