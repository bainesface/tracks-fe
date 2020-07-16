import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'addError': {
      return { ...state, errMessage: action.payload };
    }
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    console.log(email, password);
    //make api request and sign up with email and password
    //navigate to log in page
    //error messaging
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      //await AsyncStorage.getItem('token');
    } catch (err) {
      dispatch({
        type: 'addError',
        payload: 'Something went wrong with your sign up',
      });
    }
  };
};

const login = (dispatch) => {
  return ({ email, password }) => {
    //make api request and log in with email and password
    //modify state and say authenticated
    //error messaging
  };
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
