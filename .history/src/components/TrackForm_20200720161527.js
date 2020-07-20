import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter track name" />

        <Button title="Start Tracking" />
      </Spacer>
    </>
  );
};

export default TrackForm;
