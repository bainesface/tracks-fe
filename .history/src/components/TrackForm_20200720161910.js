import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { trackName, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          value={trackName}
          placeholder="Enter track name"
          onChangeText={changeName}
        />

        {recording ? (
          <Button title="Stop Tracking" onPress={stopRecording} />
        ) : (
          <Button title="Start Tracking" onPress={startRecording} />
        )}
        <Button title="Start Tracking" onPress={startRecording} />
      </Spacer>
    </>
  );
};

export default TrackForm;
