import './Navigation.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutAuth } from '../../utils/firebase/FirebaseUtils';

import CartIcon from '../../components/cart-icon/CartIcon';
function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className='header'>
        <NavLink to={'/'} className='header__logo-container'>
          <Logo className='heeader__logo' />
        </NavLink>
        <div className='header__menu'>
          <NavLink to='/' className='header__option'>
            Home
          </NavLink>
          <NavLink to='/shop' className='header__option'>
            Shop
          </NavLink>
          {user ? (
            <span className='header__option' onClick={signOutAuth}>
              Sign Out
            </span>
          ) : (
            <NavLink to='/signin' className='header__option'>
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
