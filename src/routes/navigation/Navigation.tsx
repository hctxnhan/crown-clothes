import './Navigation.Style.jsx';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/CartIcon';
import { selectCurrentUser } from '../../store/user/UserSelectors';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/UserActions';

import {
  Menu,
  NavLinkContainer,
  NavigationContainer,
} from './Navigation.Style';

function Navigation() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOutStart());
  };

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
            <NavLinkContainer as='span' onClick={handleSignOut}>
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
