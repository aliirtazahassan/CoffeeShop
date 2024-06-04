import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../Style";

const Cart = ({route})=> {
    const {productId, productName, productPrice, productDescription, productImage } = route.params;
    return (
        <View style={styles.mainBody}>
            <View>
                <Text style={styles.cartHeader}>Cart Items</Text>
            </View>
            <View style={styles.cartBox}>
                <View>
                    <Image source={productImage} style={styles.cartBoxImage}/>
                </View>
                <View style={styles.cartBoxDetails}>
                    <Text style={styles.cartBoxName}>{productName}</Text>
                    <Text style={styles.cartBoxDescription}>{productDescription}</Text>

                    <View style={styles.cartBoxButtonBox}>
                        <Text style={styles.cartBoxPrice}>Price: {productPrice}</Text>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={{fontWeight: 'bold'}}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    );
};

export default Cart;