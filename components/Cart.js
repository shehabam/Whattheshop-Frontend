import React, { Component } from "react";
import { Image, FlatList } from "react-native";
import { observer } from "mobx-react";

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
    ListItem,
    List,
} from "native-base";
import store from "../stores/store";
// import { FlatList } from "../node_modules/react-native-gesture-handler";


class Cart extends Component {
    render (){
        if (!store.CartList) return <View />;
        const cartViewList = store.CartList.map((
            cartView
        ) => (
        <FlatList key={cartView.id}>
            <ListItem>
                <Card >
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: cartView.img }} />
                            <Body>
                                <Text>{cartView.name}</Text>
                                <Text note>
                                    {cartView.price}
                                    .000 KD
                                </Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image
                                source={{ uri: cartView.img }}
                                style={{ height: 200, width: 200, flex: 1 }}
                            />
                            <Text>Description: {cartView.description}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </ListItem>
        </FlatList>
        ));
        return (
            <List>
                {cartViewList}
            </List>
        );
    }
}

export default observer(Cart);