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
  View
} from "native-base";
import store from "../stores/store";

class Carda extends Component {
  render() {
    if (!store.product) return <View />;
    const item = store.product.map((
      product // <Text>{product.name}</Text>
    ) => (
      <Container key={product.id}>
        <Link to={`/details/${product.id}`}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: product.img }} />
                <Body>
                  <Text>{product.name}</Text>
                  <Text note>
                    {product.price}
                    .000 KD
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: product.img }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>Description: {product.description}</Text>
              </Body>
            </CardItem>
          </Card>
        </Link>
      </Container>
    ));

    return <Container> {item}</Container>;
  }
}
export default observer(Carda);
