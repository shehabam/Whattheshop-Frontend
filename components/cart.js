import React, { Component } from "react";
import { FlatList } from "react-native";
import { observer } from "mobx-react";

import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  ListItem,
  List,
  Left,
  Body,
  View,
  Button
} from "native-base";
import store from "../stores/store";

class Cart extends Component {
  render() {
    const cartViewList = store.order.map(cartView => (
      <Card key={cartView.id}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: cartView.img }} />
          </Left>
        </CardItem>
        <Body>
          <Text>{cartView.name}</Text>
          <Text note>
            {cartView.price}
            .000 KD
          </Text>
          <Text>Description: {cartView.description}</Text>
        </Body>
      </Card>
    ));
    return (
      <View>
        {cartViewList}
        {/* <Button
        full
        onPress={() =>
          store.add
        }
      >
        <Text>Checkout</Text>
      </Button> */}
      </View>
    );
  }
}

export default observer(Cart);
