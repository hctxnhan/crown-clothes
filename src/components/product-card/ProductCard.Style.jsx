import styled from 'styled-components';
import { InvertedButton } from '../button/Button.Style';

export const ProductCardContainer = styled.div``;
export const Image = styled.div`
  height: 95%;
  background-position: center;
  background-size: cover;
  margin-bottom: 1rem;
  border: var(--border-thin);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  ${InvertedButton} {
    display: none;
    width: 80%;
  }

  &:hover ${InvertedButton} {
    display: block;
    position: absolute;
    bottom: 10%;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 1.8rem;
  letter-spacing: -0.8px;
  font-weight: 300;
`;

export const Price = styled.div`
  font-size: 1.8rem;
  letter-spacing: -0.8px;
  font-weight: 300;
`;
