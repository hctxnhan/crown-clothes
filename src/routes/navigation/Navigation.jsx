import './Navigation.Style.jsx';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutAuth } from '../../utils/firebase/FirebaseUtils';

import CartIcon from '../../components/cart-icon/CartIcon';

import {
  MenuContainer,
  NavLinkContainer,
  NavigationContainer,
} from './Navigation.Style';

function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavigationContainer>
        <NavLink to={'/'} className='header__logo-container'>
          <Logo className='header__logo' />
        </NavLink>
        <MenuContainer>
          <NavLinkContainer to='/'>Home</NavLinkContainer>
          <NavLinkContainer to='/shop'>Shop</NavLinkContainer>
          {user ? (
            <NavLinkContainer as='span' onClick={signOutAuth}>
              Sign Out
            </NavLinkContainer>
          ) : (
            <NavLinkContainer to='/signin'>Sign In</NavLinkContainer>
          )}
          <CartIcon />
        </MenuContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
