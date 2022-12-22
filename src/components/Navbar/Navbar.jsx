import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg';
import './Navbar.scss';

const Navbar = () => {

  let location = useLocation();

  console.log(location.pathname, publicRoutes[3])

  return (
    <nav className='navbar'>
      <Link to="/">
        <SettingsIcon className='navbar__settings-btn' width={24} height={24} />
      </Link>
      {
        publicRoutes.slice(1).map(({path, title}, i) => 
          <Link className={path !== location.pathname ? 'navbar__link' : 'navbar__link navbar__link_active'} to={path} key={i}>
            <p>{title}</p>
          </Link>
        )
      }
    </nav>
  )
}

export default Navbar