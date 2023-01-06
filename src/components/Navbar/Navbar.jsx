import React from 'react';
import { publicRoutes } from '../../routes';
import NavbarItem from './NavbarItem';
import './Navbar.scss';

const Navbar = () => {

  return (
    <nav className='navbar'>
    {
      publicRoutes.slice(1).map(({path, title, image}, i) =>
        <NavbarItem path={path} id={i} title={title} key={i} image={image} />
      )
    }
    </nav>
  )
}

export default Navbar