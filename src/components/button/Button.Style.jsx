import styled from 'styled-components';
export const BaseButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem 0;
  transition: all 0.1s linear;
  cursor: pointer;
  border: var(--border-thin);
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: rgba(0, 0, 0, 0.95);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: rgba(0, 0, 0, 0.95);
  color: white;

  &:hover {
    color: rgba(0, 0, 0, 0.95);
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: rgb(66, 134, 244);
  color: white;
  border: none;

  &:hover {
    background-color: rgb(51, 121, 235);
  }
`;
