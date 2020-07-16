import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      return { errMessage: '', token: action.payload };
    }
    case 'signup': {
      return { errMessage: '', token: action.payload };
    }
    case 'addError': {
      return { ...state, errMessage: action.payload };
    }
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signup', payload: token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'addError',
      payload: 'Something went wrong with your sign up',
    });
  }
};

const login = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'login', payload: token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'addError',
      payload: 'Something went wrong with your log in',
    });
  }
};

const logout = (dispatch) => {
  return ({ email, password }) => {
    //make api request and log out with email and password
    //modify state to say logged out and not authenitcated
    //error messaging
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout },
  { token: null, errMessage: '' }
);
