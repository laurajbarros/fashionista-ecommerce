import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import './carticon.scss';

const CartIcon = () => {
  return(
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
};

export default CartIcon;
