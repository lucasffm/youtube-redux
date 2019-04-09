import React from 'react';
import { connect } from 'react-redux';
import { Embed, Grid, Segment } from 'semantic-ui-react';

const VideoPlayer = props => {
  return (
    <div className='video-player'>
      <Grid.Column>
        {props.video.id && (
          <div>
            <Segment>
              <Embed
                id={props.video.id.videoId}
                source='youtube'
                placeholder={props.video.snippet.thumbnails.high.url}
              />
              <h4>{props.video.snippet.title}</h4>
              <p>{props.video.snippet.description}</p>
            </Segment>
          </div>
        )}
      </Grid.Column>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    video: state.playVideo.video
  };
};

export default connect(
  mapStateToProps,
  null
)(VideoPlayer);
