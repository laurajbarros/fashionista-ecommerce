import React from 'react';
import './header.scss';
import CartIcon from '../carticon/carticon';
import { Link } from 'react-router-dom';


const Header = () => {
  return(
    <div className='header'>
      <Link className='logo-container' to='/'>Logo</Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        <CartIcon/>
      </div>
    </div>
  )
}
export default Header
