import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Image, Loader, Dimmer, Grid } from 'semantic-ui-react';
import { playVideo } from '../store/actions/play-video';

class VideoList extends Component {
  renderVideo(video) {
    return (
      <List.Item
        key={video.id.videoId}
        onClick={() => this.props.playVideo(video)}
      >
        <Image src={video.snippet.thumbnails.default.url} />
        <List.Content>
          <List.Header>{video.snippet.title}</List.Header>
        </List.Content>
      </List.Item>
    );
  }

  render() {
    return (
      <Grid.Column>
        <div className='video-list'>
          {this.props.loading && (
            <Dimmer active inverted>
              <Loader size='medium'>Loading...</Loader>
            </Dimmer>
          )}
          <List animated verticalAlign='middle'>
            {this.props.videos.map(video => this.renderVideo(video))}
          </List>
        </div>
      </Grid.Column>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playVideo: video => dispatch(playVideo(video))
  };
};

const mapStateToProps = state => {
  return {
    videos: state.search.videos,
    loading: state.search.loading,
    error: state.search.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
