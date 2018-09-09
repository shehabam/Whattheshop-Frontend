import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase
import { Header, Body, Text, Left, Button, Icon, Right } from "native-base";

// Routing
import { withRouter } from "react-router-native";
import { Link } from "react-router-native";
import store from "../stores/store";

class MainHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text>Diapers</Text>
        </Body>{" "}
        <Right>
          <Link to="/cart/" component={Button} transparent>
            <Text>
              {store.counter} <Icon name="cart" />
            </Text>
          </Link>
        </Right>
      </Header>
    );
  }
}

export default withRouter(observer(MainHeader));
