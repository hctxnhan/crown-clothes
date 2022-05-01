import styled from 'styled-components';
import { InvertedButton } from '../button/Button.Style';
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 140%;
  right: 0rem;
  z-index: 5;

  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  overflow: scroll;
  margin-bottom: 1.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #555;
  }
`;

export const EmptyMessage = styled.span`
  align-self: center;
  margin-top: 3rem;
  font-size: 1.4rem;
`;
