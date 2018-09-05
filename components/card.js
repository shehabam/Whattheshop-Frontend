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
    List,
    ListItem
} from "native-base";
import store from "../stores/store";
import { FlatList } from "../node_modules/react-native-gesture-handler";

class Carda extends Component {
    render() {
        if (!store.product) return <View />;
        const item = store.product.map((
            produ
        ) => (
                        <Link to={"/details/" + produ.id} key={produ.id} component={ListItem}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{ uri: produ.img }} />
                                        <Body>
                                            <Text>{produ.name}</Text>
                                            <Text note>
                                                {produ.price}
                                                .000 KD
                                            </Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Image
                                            source={{ uri: produ.img }}
                                            style={{ height: 200, width: 200, flex: 1 }}
                                        />
                                        <Text>Description: {produ.description}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Link>
                    ));

        return <List>
                    {item}
                </List>
    }
}
export default observer(Carda);
