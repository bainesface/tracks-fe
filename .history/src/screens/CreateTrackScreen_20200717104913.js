import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';

const CreateTrackScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>CreateTrackScreen</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default CreateTrackScreen;
