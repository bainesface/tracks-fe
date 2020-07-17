import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state } = useContext(LocationContext);
  console.log(state.currentLocation);

  if (!state.currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,

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
