import React, { Component } from 'react';
import { Segment, Input, Icon } from 'semantic-ui-react';
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
      <div className='search-bar'>
        <Segment>
          <Icon name='youtube' size='big' color='red' />
          <Input
            icon='search'
            size='large'
            placeholder='Pesquisar...'
            className='input-search'
            onKeyDown={e => this.searchTerm(e)}
          />
        </Segment>
      </div>
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
