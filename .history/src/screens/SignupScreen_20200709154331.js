import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
//import { Context as AuthContext } from '../context/AuthContext';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  //const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  signup = (event) => {
    console.log(email, password);
    return axios
      .post('https://tracks-tracking-app.herokuapp.com/signup', {
        email,
        password,
      })
      .then((response) => {
        console.log(response, 'response');
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.text}>
          Sign up for Tracks
        </Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.nativeEvent.text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.nativeEvent.text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button title="Sign up" onPress={signup} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
});

export default SignupScreen;
