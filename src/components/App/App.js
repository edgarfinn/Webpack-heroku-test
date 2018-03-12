import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import AlbumList from '../../containers/AlbumList/album_list';
import AlbumDetail from '../../containers/AlbumDetail/album_detail';
import NewAlbumForm from '../../containers/NewAlbumForm/new_album_form';
import PageHeader from './PageHeader/Page_header';

import './App.scss';

export class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <AlbumList />
        <AlbumDetail />
        <NewAlbumForm />
      </div>
    )
  }
}


export default hot(module)(App);
