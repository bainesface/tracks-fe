import React from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input />
      </Spacer>

      <Button title="Start Tracking" />
    </>
  );
};

export default TrackForm;
