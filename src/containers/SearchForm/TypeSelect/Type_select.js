import React from 'react';
import './Type_select.scss';


export default ({input}) => {

  return (
    <div className="element-wrap">
      <select
        className="form__element type__select"
        {...input}
        >
          <option value="">Search type...</option>
          <option value="User">User</option>
          <option value="Organisation">Organisation</option>
        </select>
    </div>
  )
}
