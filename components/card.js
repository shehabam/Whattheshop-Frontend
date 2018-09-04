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
            produ // <Text>{produ.name}</Text>
        ) => (
                <Container key={produ.id}>
                    <Header />
                    <Content>
                        <Link to={"/details/" + produ.id}>
                            <Card style={{ flex: 0 }}>
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
                    </Content>
                </Container>
            ));

        return <Container> {item}</Container>;
    }
}
export default observer(Carda);
