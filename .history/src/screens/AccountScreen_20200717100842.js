import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { state, logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Account</Text>
      <Spacer>
        <Button
          title="Log Out"
          onPress={() => {
            logout({ email, password });
          }}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AccountScreen;
