import React from 'react';
import './Page_header.scss';

export default () => {
  return (
    <header className="page__header">
      <i className="header__icon fa fa-github-square" aria-hidden="true"></i>
      <h1 className="header__title">Github Repo Finder</h1>
    </header>
  )
}
