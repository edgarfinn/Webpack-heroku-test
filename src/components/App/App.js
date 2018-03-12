import React, {Component} from 'react';
import AlbumList from '../../containers/AlbumList/album_list';
import AlbumDetail from '../../containers/AlbumDetail/album_detail';
import NewAlbumForm from '../../containers/NewAlbumForm/new_album_form';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Welcome To React Custom!</h1>
        <AlbumList />
        <AlbumDetail />
        <NewAlbumForm />
      </div>
    )
  }
}


export default App;