import styled, { css } from 'styled-components';

export const shrinkLabel = css`
  top: -1.4rem;
  font-size: 1.2rem;
  color: var(--text-color);
`;

export const FormInputContainer = styled.div`
  position: relative;
`;

type LabelProps = {
  shrink: boolean;
};

export const Label = styled.label<LabelProps>`
  position: absolute;
  font-size: var(--font-size-normal);
  color: var(--text-color);
  font-weight: var(--font-weight-xthin);
  left: 0.5rem;
  top: 1rem;
  transition: all 0.12s ease-in;

  ${({ shrink }) => shrink && shrinkLabel};
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  padding: 1rem 1rem 1rem 0.5rem;
  outline: none;
  font-size: 1.6rem;
  font-family: var(--font-family);
  letter-spacing: 0.5px;

  &[type='password'] {
    letter-spacing: 3px;
    font-size: 2rem;
  }

  &:hover ~ ${Label}, &:focus ~ ${Label} {
    ${shrinkLabel}
  }
`;
