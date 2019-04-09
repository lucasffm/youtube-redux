import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './app.css';

import store from './store';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <SearchBar />
          <VideoPlayer />
          <VideoList />
        </div>
      </Provider>
    );
  }
}

export default App;
