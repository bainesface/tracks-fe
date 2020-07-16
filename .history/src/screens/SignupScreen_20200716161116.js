import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracks"
        errMessage={state.errMessage}
        onSubmit={signup}
        submitButtonText="Sign Up!"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Spacer>
          <Text style={styles.navigationText}>
            Already have an account? Log in instead
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
    color: 'blue',
  },
});

export default SignupScreen;
