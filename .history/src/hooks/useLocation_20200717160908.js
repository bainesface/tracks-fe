import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

export default () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
};
