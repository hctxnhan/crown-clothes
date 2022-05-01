import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: var(--border-thin);
`;

const style = css`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;

const centering = css`
  justify-content: center;
`;

export const Image = styled.div`
  ${style}

  img {
    width: 90%;
    height: auto;
  }
`;

export const Name = styled.div`
  ${style}
  ${centering}
`;

export const Price = styled.div`
  ${style}
  ${centering}
`;

export const Quantity = styled.div`
  ${style}
  ${centering}

display: flex;
  gap: 1rem;
`;

export const Remove = styled.div`
  ${style}
  ${centering}
  span {
    cursor: pointer;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;
