import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key: 'AIzaSyD-M_fAojsG5CpsINgEmsTNGJSzjEzqdNg',
  },
});

export default authApi;
