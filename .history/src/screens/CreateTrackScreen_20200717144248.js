import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';
import Map from '../components/Map';

const CreateTrackScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
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
