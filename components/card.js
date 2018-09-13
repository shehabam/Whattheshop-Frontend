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
  Toast,
  Input,
  Item
} from "native-base";
import store from "../stores/store";

class Carda extends Component {
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
    const theId = this.props.match.params.id;
    const productInCategory = store.getProductByCategory(theId);

    if (!store.productWithCat) return <View />;
    const item = store.productWithCat.items.map(product => (
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
                onPress={() => this.increase(product.id)}
                transparent
              >
                <Icon type="FontAwesome" name="plus" style={{ fontSize: 30 }} />
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Link>
    ));

    return (
      <Container>
        {/* <Item rounded>
          <Input
            placeholder="Search by CATEGORY"
            onChangeText={e => store.changeCategoryValue(e)}
          />
        </Item> */}
        <Item rounded>
          <Input
            placeholder="Search by product"
            onChangeText={e => store.changeProductValue(e)}
          />
        </Item>{" "}
        {item}{" "}
      </Container>
    );
  }
}
export default observer(Carda);
