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
import { bold } from "../node_modules/ansi-colors";

class Detail extends Component {
    componentDidMount() {
        const theID = this.props.match.params.id;
        store.getProductsById(theID);
    }
    render() {
        const detailed = store.detailedProduct;
        if (!store.detailedProduct) return <View />;

        return (
            <Container>
                <Header />
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
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
                                style={{ height: 300,  width: null, flex: 1 }}
                            />
                        </CardItem>
                        <Body>
                            <Text>Description: {detailed.description}</Text>
                        </Body>
                    </Card>
                    <Button full success onPress={() => store.addToTheCartList(detailed.id, detailed.name, detailed.price, detailed.img, detailed.description)}>
                        <Text style={{ fontSize:20, fontWeight:"bold" }}>Add To The Cart</Text>
                    </Button>
            </Container>
        );
    }
}
export default observer(Detail);
