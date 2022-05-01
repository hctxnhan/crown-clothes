import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 60%;
  margin: auto;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: var(--border-thin);
`;

export const HeaderBlock = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  flex: 1;
  text-align: center;
`;
export const Total = styled.p`
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: 2.4rem;
  text-align: right;
`;
