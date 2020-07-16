import axios from 'axios';

export const postUser = (email, password) => {
  return axios
    .post('https://tracks-tracking-app.herokuapp.com/signup', {
      email,
      password,
    })
    .then((response) => {
      console.log(response, 'response');
    })
    .catch((err) => {
      console.log(err, 'err');
    });
};
