import React from 'react';
import {Field, reduxForm} from 'redux-form';
import InputField from './InputField/input_field.js';

const NewAlbumForm = (props) => {

  const onSubmit = (values) => {
    console.log('values submitted', values);
  }

  const {handleSubmit} = props;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit.bind(this))}
        >
          <Field
            name="NewAlbum"
            component={InputField}
          />

      </form>
    </div>
  )
};

export default reduxForm({
  form: 'AddNewAlbum'
})(NewAlbumForm)
