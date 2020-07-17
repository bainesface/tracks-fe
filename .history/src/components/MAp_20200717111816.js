import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 53.483959 + i * 0.001,
        longitude: -2.244644 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 53.483959 - i * 0.002,
        longitude: -2.244644 - i * 0.002,
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 53.483959,
        longitude: -2.244644,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 600,
  },
});

export default Map;
