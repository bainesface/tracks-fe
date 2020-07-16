import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import axios from 'axios';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// const signup = (dispatch) => {
//   return async ({ email, password }) => {
//     //make api request and sign up with email and password
//     //navigate to log in page
//     //error messaging
//     console.log(email, 'email');
//     console.log(password, 'password');
//     try {
//       console.log('trying');
//       const response = await axios.post(
//         'https://tracks-tracking-app.herokuapp.com/signup',
//         { email, password }
//       );
//       console.log(response, 'response');
//     } catch (err) {
//       console.log(err, 'err');
//     }
//   };
// };

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
  { login, logout },
  { isSignedIn: false }
);
