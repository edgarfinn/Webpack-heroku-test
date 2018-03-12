import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SearchInput from './SearchInput/Search_input.js';
import TypeSelect from './TypeSelect/Type_select.js';
import SearchSubmit from './SearchSubmit/Search_submit.js';
import {validate, warn} from './form_validation.js';

import './Search_form.scss';

const SearchForm = (props) => {

  const onSubmit = (values) => {
    console.log('submitted:',values);
  }

  const { handleSubmit } = props;
  return (
    <section className="section__search-form">
      <form
        className="search-form"
        onSubmit={handleSubmit(onSubmit.bind(this))}
        >
          <Field
            name="searchType"
            component={TypeSelect}
          />
        <Field
          name="searchTerm"
          component={SearchInput}
        />
        <SearchSubmit />
      </form>
    </section>
  )
}

export default reduxForm({
  form: 'SearchTerm',
  validate,
  warn
})(SearchForm);
