import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'addCurrentLocation':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {
  dispatch({ type: 'startRecording' });
};
const stopRecording = (dispatch) => () => {};
const addLocation = (dispatch) => (location) => {
  console.log('hi there');
  dispatch({ type: 'addCurrentLocation', payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
