import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'logout': {
      return { token: null, errMessage: '' };
    }
    case 'clearErrMessage': {
      return { ...state, errMessage: '' };
    }
    case 'signin': {
      return { errMessage: '', token: action.payload };
    }
    case 'addError': {
      return { ...state, errMessage: action.payload };
    }
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const clearErrMessage = (dispatch) => () => {
  dispatch({ type: 'clearErrMessage' });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
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
    const response = await trackerApi.post('/signin', { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'addError',
      payload: 'Something went wrong with your log in',
    });
  }
};

const logout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'logout' });
  navigate('Login');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout, clearErrMessage, tryLocalSignin },
  { token: null, errMessage: '' }
);
