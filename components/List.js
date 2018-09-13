import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-native";

import {
  Container,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
  Right,
  Up,
  Down,
  Toast,
  Input,
  Item
} from "native-base";
import store from "../stores/store";

class List extends Component {
  increase(id) {
    store.addToCart(id);
    Toast.show({
      text: "You Added an Item",
      textStyle: { color: "#77FF33" },
      buttonText: "+1",
      buttonTextStyle: { color: "#77FF33" }
    });
  }
  render() {
    if (!store.filteredProducts) return <View />;
    const item = store.filteredProducts.map(product => (
      <Link to={`/Card/${product.id}`} key={product.id}>
        <Card style={{ height: 130 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{product.category_name}</Text>
              </Body>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
        </Card>
      </Link>
    ));

    return (
      <Container>
        <Item rounded>
          <Input
            placeholder="Search by CATEGORY"
            onChangeText={e => store.changeCategoryValue(e)}
          />
        </Item>
        {/* <Item rounded>
          <Input
            placeholder="Search by product"
            onChangeText={e => store.changeProductValue(e)}
          />
        </Item>{" "} */}
        {item}{" "}
      </Container>
    );
  }
}
export default observer(List);
