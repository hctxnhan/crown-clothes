import './FormInput.scss';
import React from 'react';

export default function FormInput({ label, value, ...others }) {
  return (
    <div className='form-input'>
      <input
        className={`form-input__field ${
          value ? 'form-input__field--not-empty' : ''
        }`}
        {...others}
      />
      <label htmlFor='name' className='form-input__label'>
        {label}
      </label>
    </div>
  );
}
