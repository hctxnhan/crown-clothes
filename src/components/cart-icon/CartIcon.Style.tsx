import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 3rem;
  height: 3rem;
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1.2rem;
  font-weight: var(--font-weight-normal);
  top: 1rem;
`;
