import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state } = useContext(LocationContext);
  console.log(state);
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 53.446545791862015,
        longitude: -2.18619740568305,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 450,
  },
});

export default Map;
