import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  searchTerm = e => {
    const term = e.target.value;
    if (e.keyCode === 13) {
      console.log(term);
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

export default SearchBar;
