import { FormInputContainer, InputField, Label } from './FormInput.Style.jsx';
import React from 'react';
import { InputHTMLAttributes, FC } from 'react';

export type FormInputProps = {
  label: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, value, ...others }) => {
  const isShrink: boolean = value.length > 0;
  return (
    <FormInputContainer>
      <InputField value={value} {...others} />
      <Label shrink={isShrink}>{label}</Label>
    </FormInputContainer>
  );
};

export default FormInput;
