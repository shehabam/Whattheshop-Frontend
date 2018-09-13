import React, { Component } from "react";
import store from "../stores/store";
import { observer } from "mobx-react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
// NativeBase
import { Footer, FooterTab, Button, Icon } from "native-base";

// Router
import { Link } from "react-router-native";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Link component={Button} to="/">
            <Icon type="MaterialCommunityIcons" name="baby" />
          </Link>

          <Link component={Button} to="/register">
            <Icon name="person" />
          </Link>
        </FooterTab>
      </Footer>
    );
  }
}
const styles = StyleSheet.create({
  backgr: {
    backgroundColor: "#77868C"
  }
});
export default observer(MainFooter);
