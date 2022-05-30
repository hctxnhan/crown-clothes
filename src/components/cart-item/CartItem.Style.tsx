import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  height: 7rem;
  align-items: center;
  gap: 1rem;

  img {
    width: 30%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.div`
  font-size: 1.4rem;
  letter-spacing: -0.8px;
  font-weight: 300;
`;

export const Total = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
`;
