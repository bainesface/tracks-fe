import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';

const CreateTrackScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a Track</Text>
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
