import React from "react";
import { View, Text, Image } from "react-native";

class Product extends React.Component {
    
    render() {
        const {name, img} = this.props.product
        return (
            <View>
                <Text>
                    {name}
                </Text>
                <Image
                    style={{ with: 150, height: 150 }}
                    source={{ uri: img }} />
            </View>
        )
    }
}

export default Product