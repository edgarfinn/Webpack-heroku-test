import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums';
import ActiveAlbum from './reducer_active_album';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  albums: AlbumsReducer,
  activeAlbum: ActiveAlbum,
  form: formReducer
});

export default rootReducer;
