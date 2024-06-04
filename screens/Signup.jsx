import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../Style'; // Ensure this path is correct

const Signup = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.signupBody}>
        <Text style={styles.LoginHeader}>Signup</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            placeholderTextColor={'#ffff'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone No"
            placeholderTextColor={'#ffff'}
            required
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={'#ffff'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'#ffff'}
            required
            secureTextEntry
          />
          <TextInput
            style={styles.textInput}
            placeholder="Re-enter password"
            placeholderTextColor={'#ffff'}
            required
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text} onPress={() => navigation.navigate('Login')}>
            Already have an account | Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;
