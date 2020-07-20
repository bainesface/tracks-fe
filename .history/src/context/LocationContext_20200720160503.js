import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'stopRecording':
      return { ...state, recording: false };
    case 'startRecording':
      return { ...state, recording: true };
    case 'addCurrentLocation':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {
  dispatch({ type: 'startRecording' });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stopRecording' });
};
const addLocation = (dispatch) => (location, isTracking) => {
  console.log('hi there');
  dispatch({ type: 'addCurrentLocation', payload: location });
  if (recording) {
    dispatch({ type: 'addLocation', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
