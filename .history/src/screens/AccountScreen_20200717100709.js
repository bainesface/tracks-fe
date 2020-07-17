import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { state, logout } = useContext(AuthContext);

  return (
    <View>
      <Button
        title="Log Out"
        onPress={() => {
          logout({ email, password });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AccountScreen;
