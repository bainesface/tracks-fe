import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errMessage ? (
        <Text style={styles.errMessage}>{state.errMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title="Sign up"
          onPress={() => {
            signup({ email, password });
          }}
        />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Spacer>
          <Text style={styles.navigationText}>
            Already have an account? Log in{' '}
            <Text style={styles.here}>here</Text>
          </Text>
        </Spacer>
      </TouchableOpacity>
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
  errMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  navigationText: {
    textAlign: 'center',
  },
  here: {
    color: 'blue',
  },
});

export default SignupScreen;
