import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'changeName':
      return { ...state, trackName: action.payload };
    case 'addLocation':
      return { ...state, locations: [...state.locations, action.payload] };
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

const changeName = (dispatch) => (name) => {
  dispatch({ type: 'changeName', payload: name });
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
  { startRecording, stopRecording, addLocation, changeName },
  { trackName: '', recording: false, locations: [], currentLocation: null }
);
