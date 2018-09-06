import React, { Component } from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import store from "../stores/store";
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
  Right,
  View
} from "native-base";

class Detail extends Component {
  render() {
    const theID = this.props.match.params.id;
    // console.log(theID);
    const detailed = store.getProductDetail(theID);
    // const detailed = store.detailedProduct;

    return (
      <Container>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Thumbnail source={{ uri: detailed.img }} />
                <Text>{detailed.name}</Text>
                <Text note>
                  {detailed.price}
                  .000 KD
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: detailed.img }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <Body>
            <Text>Description: {detailed.description}</Text>
          </Body>
        </Card>
        <Button
          success
          full
          onPress={() =>
            store.addToTheCartList(
              detailed.id,
              detailed.name,
              detailed.price,
              detailed.img,
              detailed.description
            )
          }
        >
          <Text>Add To The Cart List </Text>
        </Button>
      </Container>
    );
  }
}
export default observer(Detail);
