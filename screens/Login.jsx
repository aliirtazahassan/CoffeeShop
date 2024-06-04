import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import Signup from './Signup';
import Home from './Home';
import styles from '../Style'; 

const Login = (props) => {
  return (
    <View style={styles.body}>
      <View style={styles.LoginBody}>
        <Text style={styles.LoginHeader}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Phone no"
            placeholderTextColor={'#ffff'}
            required
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'#ffff'}
            required
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View>
          
          <Text style={styles.text} onPress={()=>{props.navigation.navigate("Signup")}}>
            Don't have an account | Signup
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
