import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const LinkText = ({ routeName, text }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
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

export default withNavigation(LinkText);
