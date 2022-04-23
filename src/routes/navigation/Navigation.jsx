import './Navigation.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
function Navigation(props) {
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
          <NavLink to='/signin' className='header__option'>
            Sign In
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
