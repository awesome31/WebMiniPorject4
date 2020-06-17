import axios from 'axios';
const KEY = '';

const getVidoes = (term) => {
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
      q: term,
      type: 'video',
    },
  });
};

export { getVidoes };
