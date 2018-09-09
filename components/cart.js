import React, { Component } from "react";
import { observer } from "mobx-react";

import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  ListItem,
  List,
  Left,
  Right,
  Body,
  Button,
  Container,
  Icon,
  Toast
} from "native-base";
import store from "../stores/store";

class Cart extends Component {
  increase(id) {
    store.increaseFromCart(id);
    Toast.show({
      text: "You Added an Item",
      textStyle: { color: "#77FF33" },
      buttonText: "+1",
      buttonTextStyle: { color: "#77FF33" }
    });
  }

  decrease(id) {
    store.decreaseFromCart(id);
    Toast.show({
      text: "You Deleted an Item",
      textStyle: { color: "#FF3333" },
      buttonText: "-1",
      buttonTextStyle: { color: "#FF3333" }
    });
  }

  render() {
    const cartViewList = store.order.map(cartView => (
      <List key={cartView.id}>
        <ListItem thumbnail>
          <Left>
            <Button transparent onPress={() => this.decrease(cartView.id)}>
              <Icon type="FontAwesome" name="minus" />
            </Button>
            <Thumbnail square source={{ uri: cartView.img }} />
          </Left>
          <Body>
            <Text>{cartView.name}</Text>
            <Text note>
              {cartView.price}
              .000 KD
            </Text>
            <Text note>{cartView.quantity}</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.increase(cartView.id)}>
              <Icon type="FontAwesome" name="plus" />
            </Button>
          </Right>
        </ListItem>
      </List>
    ));
    return (
      <Container>
        {cartViewList}
      </Container>
        <Button full onPress={() => store.checkout()}>
          <Text>Checkout</Text>
        </Button>
    );
  }
}

export default observer(Cart);

// style={{ fontSize: 30 }}
