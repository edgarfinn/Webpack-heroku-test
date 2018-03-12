import React from 'react';

export default (field) => {
  return (
    <div>
      <input
        type="text"
        placeholder="album title"
        {...field.input}
      />
    </div>
  )
}
