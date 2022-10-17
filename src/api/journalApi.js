import axios from 'axios';

const journalApi = axios.create({
  baseURL: 'https://vue-demos-f0e6b-default-rtdb.firebaseio.com',
});

export default journalApi;
