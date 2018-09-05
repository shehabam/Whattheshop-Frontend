import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-native";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../stores/authStore";

// Routing
import { Redirect } from "react-router-native";
import store from "../stores/store";

class registrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    if (authStore.isAuthenticated) return <Redirect to="/profile" />;
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          onPress={() =>
            authStore.loginUser(this.state.username, this.state.password)
          }
        >
          <Text>Login</Text>
        </Button>
        <Link
          to="/profile"
          component={Button}
          full
          onPress={() =>
            authStore.registerUser(this.state.username, this.state.password)
          }
        >
          <Text>Register</Text>
        </Link>
      </Form>
    );
  }
}

export default observer(registrationForm);
