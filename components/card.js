import React, { Component } from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { Link } from "react-router-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
  Right
} from "native-base";
import store from "../stores/store";

class Carda extends Component {
  render() {
    if (!store.product) return <View />;
    const item = store.product.map((
      product // <Text>{product.name}</Text>
    ) => (
      <Link to={`/details/${product.id}`} key={product.id}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail square source={{ uri: product.img }} />
              <Body>
                <Text>{product.name}</Text>
              </Body>
            </Left>
            <Right>
              <Text note>
                {product.price}
                .000 KD
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Description: {product.description}</Text>
            </Body>
            <Right>
              <Button
                style={{ borderRadius: 90, width: 47 }}
                onPress={() => store.addFromList()}
                transparent
              >
                <Icon type="FontAwesome" name="plus" style={{ fontSize: 30 }} />
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Link>
    ));

    return <Container> {item}</Container>;
  }
}
export default observer(Carda);
