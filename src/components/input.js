import React from 'react';

export default ({ input, label, size = 's12', meta: { error, touched } }) => (
   <div className={`input-field col ${size}`}>
      <input {...input} id={input.name} type="text" autoComplete="off"/>
      <label htmlFor={input.name}>{label}</label>
      <p className="red-text">{touched && error}</p>
   </div>
)