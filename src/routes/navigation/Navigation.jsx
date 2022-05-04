import './Navigation.Style.jsx';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutAuth } from '../../utils/firebase/FirebaseUtils';

import CartIcon from '../../components/cart-icon/CartIcon';
import { selectCurrentUser } from '../../store/user/UserSelectors.js';
import { useSelector } from 'react-redux';

import {
  Menu,
  NavLinkContainer,
  NavigationContainer,
} from './Navigation.Style';

function Navigation() {
  const user = useSelector(selectCurrentUser);
  return (
    <>
      <NavigationContainer>
        <NavLink to={'/'} className='header__logo-container'>
          <Logo />
        </NavLink>
        <Menu>
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
        </Menu>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
