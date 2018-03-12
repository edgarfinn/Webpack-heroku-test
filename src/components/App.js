import React, {Component} from 'react';
import AlbumList from '../containers/AlbumList/album_list';
import AlbumDetail from '../containers/AlbumDetail/album_detail';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To React Custom!</h1>
        <AlbumList />
        <AlbumDetail />
      </div>
    )
  }
}

export default App;
