import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import LinkText from '../components/LinkText';

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracks"
        errMessage={state.errMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <LinkText
        routeName="Login"
        text="Already have an account? Log in instead"
      />
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
