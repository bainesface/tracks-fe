import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';

const CreateTrackScreen = () => {
  const { addLocation } = useContext(LocationContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default CreateTrackScreen;
