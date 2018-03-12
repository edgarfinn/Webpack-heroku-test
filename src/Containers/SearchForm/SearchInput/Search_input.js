import React from 'react';

export default({input, meta: {touched, error, warning}}) => {

  const className = touched && error ? "form__element form__element--error" : "form__element";
  const placeholder = touched && error ? error : "User or Organisation name"

  return (

    <div className="element-wrap">

      {warning &&
        <p className="form__element warning">
          {warning}
        </p>}

      <input
        className={className}
        type="text"
        placeholder={placeholder}
        {...input}
      />
    </div>
  )
  
}
