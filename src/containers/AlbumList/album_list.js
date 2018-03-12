import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import './album_list.scss'

import { selectAlbum } from '../../actions/index.js';

class AlbumList extends Component {
  renderList() {
  return this.props.albumz.map(album => {
    return (
      <li
        className="album-list-element"
        key={album.title}
        onClick={() => { this.props.selectAlbum(album)} }>
        <h4>{album.title}</h4>
      </li>
    )
  })
}

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

// used to pass state to connect, which maps redux state to containers props
const mapStateToprops = (state) => {
  return {
    albumz: state.albums
  }
}

// 'dispatch' = your actions being distributed through reducers
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectAlbum: selectAlbum}, dispatch)
}

export default connect(mapStateToprops,mapDispatchToProps)(AlbumList)
