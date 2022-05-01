import { FormInputContainer, InputField, Label } from './FormInput.Style.jsx';
import React from 'react';

export default function FormInput({ label, value, ...others }) {
  return (
    <FormInputContainer>
      <InputField value={value} {...others} />
      <Label shrink={value && value.length > 0}>{label}</Label>
    </FormInputContainer>
  );
}
