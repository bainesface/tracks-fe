import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import LinkText from '../components/LinkText';

const LoadingScreen = () => {
  const { state, login, clearErrMessage, tryLocalSignin } = useContext(
    AuthContext
  );

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrMessage} />
      <AuthForm
        headerText="Log in to your account"
        errMessage={state.errMessage}
        onSubmit={login}
        submitButtonText="Log In"
      />
      <LinkText routeName="Signup" text="Don't have an account? Sign up here" />
    </View>
  );
};

LoadingScreen.navigationOptions = () => {
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

export default LoadingScreen;
