import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchVideo } from '../store/actions/search-video';

class SearchBar extends Component {
  searchTerm = e => {
    const term = e.target.value;
    if (e.keyCode === 13) {
      console.log(term);
      this.props.searchVideo(term);
    }
  };

  render() {
    return (
      <div className='search-bar'>
        <Segment stacked>
          <Input
            icon='search'
            size='large'
            placeholder='Pesquisar...'
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
