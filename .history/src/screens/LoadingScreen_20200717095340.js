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

  return <View style={styles.container}></View>;
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
