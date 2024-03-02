import CircularButton from '../buttons/circular/CircularButton';
import CartIcon from '../icons/CartIcon';
import { useBeanStore } from '../../store/BeanStore';
import { useCartStore } from '../../store/CartStore';
import './cart.scss';
import { useState } from 'react';

const Cart = () => {
  const { totalBeans } = useBeanStore();
  const { cartOpen } = useCartStore();

  return (
    <>
      <div className={`fog ${cartOpen}`}>
        <div className={`shoppingcart ${cartOpen}`}>Cart</div>
      </div>
    </>
  );
};
export default Cart;
