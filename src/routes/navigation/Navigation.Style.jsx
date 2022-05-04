import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const Menu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavLinkContainer = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.75rem 0.75rem;
  font-size: 1.8rem;
  font-weight: var(--font-weight-xthin);
  color: black;
  cursor: pointer;
`;
