import React from 'react';
import { Text } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const LinkText = ({ routeName, text }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.navigationText}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default LinkText;
