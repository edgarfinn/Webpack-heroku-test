import React, { Component } from 'react';
import './App.scss';

import PageHeader from './PageHeader/Page_header';
import SearchForm from '../../Containers/SearchForm/Search_form';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <PageHeader />
        <SearchForm />
      </div>
    )
  }
}

export default App;
