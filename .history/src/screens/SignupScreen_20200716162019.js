import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import LinkText from '../components/LinkText';

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
      <LinkText routeName="Login" />
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
  navigationText: {
    textAlign: 'center',
    color: 'blue',
  },
});

export default SignupScreen;
