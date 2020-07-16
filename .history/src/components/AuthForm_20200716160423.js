import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({});

export default AuthForm;
