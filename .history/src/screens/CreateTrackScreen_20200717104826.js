import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Map from '../components/Map';

const CreateTrackScreen = () => {
  return (
    <View>
      <Map />
      <Text style={styles.text}>CreateTrackScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default CreateTrackScreen;
