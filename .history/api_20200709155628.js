import axios from 'axios';

export const postUser = (email, password) => {
  console.log('in post user');
  return axios
    .post('https://tracks-tracking-app.herokuapp.com/signup', {
      email,
      password,
    })
    .then((response) => {
      return response;
    });
};
