import React from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../Style';
import Cart from './Cart';

const products = [
  {
    id: 1,
    name: 'Coffee',
    price: '1050',
    description:
      'These are the world\'s best coffee beans that are available to us',
    image: require('../assets/coffee.jpg'),
  },
  {
    id: 2,
    name: 'Coffee Beans',
    price: '10000',
    description:
      'These are the world\'s best coffee beans that are available to us',
    image: require('../assets/coffee_beans.jpeg'),
  },
  {
    id: 3,
    name: 'Black Coffee',
    price: '1550',
    description:
      'These are the world\'s best coffee beans that are available to us',
    image: require('../assets/black_coffee.jpg'),
  },

];

const Home = (props) => {

  const handleAddToCart = (item) => {
    props.navigation.navigate('Cart', {
      productId: item.id,
      productName: item.name,
      productPrice: item.price,
      productDescription: item.description,
      productImage: item.image,
    });
  };

  return (
    <ScrollView style={styles.mainBody}>
      <Image
        source={require('../assets/coffee_beans.jpeg')}
        style={styles.imageHeader}
      />
      <View style={styles.introBox}>
        <Text style={styles.introText}>
          "Cozy up with a cup of joy at{' '}
          <Text style={{color: 'red', fontSize: 20}}>[Coffee Shop Name]!</Text>{' '}
          Freshly brewed coffee, warm atmosphere, and a welcoming spot to relax
          and connect"
        </Text>
      </View>
      <View>
        <Text style={styles.centerHeading}>Our Products</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Image style={styles.productImage} source={item.image} />
            <View>
              <Text style={styles.productName}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
            <View style={styles.productDetail}>
              <Text style={styles.productPrice}>
                <Text style={{color: 'red'}}>Price: </Text>
                {item.price}
              </Text>
              <TouchableOpacity onPress={()=> handleAddToCart(item)}>
              <Image
                source={require('../assets/addCartButton.png')}
                style={styles.addCartButton} 
                
              />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </ScrollView>
  );
};

export default Home;
