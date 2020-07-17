import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -2.244644 + increment * tenMetersWithDegrees,
      latitude: 53.483959 + increment * tenMetersWithDegrees,
    },
  };
};
