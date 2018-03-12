import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import RepoListReducer from './reducer_repo_list';

const rootReducer = combineReducers({
  repoList: RepoListReducer,
  form: formReducer
})

export default rootReducer;
