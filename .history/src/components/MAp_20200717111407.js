import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 53.483959,
        longitude: -2.244644,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 600,
  },
});

export default Map;
