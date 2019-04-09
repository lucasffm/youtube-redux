import React, { Component } from 'react';
import { Segment, Input, Icon, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchVideo } from '../store/actions/search-video';

class SearchBar extends Component {
  searchTerm = e => {
    const TERM = e.target.value;
    if (e.keyCode === 13) {
      this.props.searchVideo(TERM);
    }
  };

  render() {
    return (
      <Grid.Column width={24}>
        <Segment>
          <div className='search-bar'>
            <Icon name='youtube' size='big' color='red' />
            <Input
              icon='search'
              size='large'
              placeholder='Pesquisar...'
              className='input-search'
              onKeyDown={e => this.searchTerm(e)}
            />
          </div>
        </Segment>
      </Grid.Column>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchVideo: term => dispatch(searchVideo(term))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
