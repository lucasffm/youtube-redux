const INITIAL_STATE = {
  video: {}
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'PLAY_VIDEO') {
    return {
      video: action.payload.video
    };
  } else {
    return state;
  }
};
