// Action sincrona
export const playVideo = video => {
  return {
    type: 'PLAY_VIDEO',
    payload: {
      video
    }
  };
};
