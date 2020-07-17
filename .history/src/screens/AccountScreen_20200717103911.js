import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>Account</Text>
      <Spacer>
        <Button title="Log Out" onPress={logout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AccountScreen;
