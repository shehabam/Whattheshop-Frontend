import React, { Component } from "react";

// NativeBase Components
import { Card, CardItem, Text, Button, View } from "native-base";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Redirect } from "react-router-native";

import store from "../stores/store";

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
          <Text>{authStore.user.username}</Text>
          {k}
          <Button danger onPress={() => authStore.logoutUser()}>
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Profile);
