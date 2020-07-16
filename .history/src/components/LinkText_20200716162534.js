import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Spacer from './Spacer';

const LinkText = ({ routeName, text, action }) => {
  return (
    <TouchableOpacity onPress={() => action(routeName)}>
      <Spacer>
        <Text style={styles.navigationText}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navigationText: {
    textAlign: 'center',
    color: 'blue',
  },
});

export default LinkText;
