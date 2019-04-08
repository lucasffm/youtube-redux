import ytSearch from 'youtube-api-v3-search';
import API_KEY from '../../api/api';

export const initSearchVideo = () => {
  return {
    type: 'SEARCH_VIDEO_INIT',
    loading: true,
    error: false
  };
};

export const searchVideoSuccess = videos => {
  return {
    type: 'SEARCH_VIDEO_SUCCESS',
    videos,
    loading: false,
    error: false
  };
};

export const searchVideoFailure = () => {
  return {
    type: 'SEARCH_VIDEO_ERROR',
    loading: false,
    error: true
  };
};

export const searchVideo = term => {
  return dispatch => {
    console.log(API_KEY);
    dispatch(initSearchVideo());
    ytSearch(API_KEY, { q: term })
      .then(result => {
        dispatch(searchVideoSuccess(result.items));
      })
      .catch(() => {
        searchVideoFailure();
      });
  };
};
