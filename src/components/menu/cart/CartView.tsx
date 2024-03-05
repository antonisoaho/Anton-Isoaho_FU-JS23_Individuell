import './cart.scss';
import { useState } from 'react';
import CartButton from '../button/CartButton';
import { useBeanStore } from '../../../store/BeanStore';
import { postNewOrder } from '../../../api/beans/beanCalls';
import useUserStore from '../../../store/UserStore';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import Dots from '../../common/dots/Dots';

const CartView = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    totalPrice,
    order,
    formatOrderForSubmission,
    setLastOrder,
    clearStore,
  } = useBeanStore();
  const {
    user: { token },
  } = useUserStore();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen((state) => !state);
  };

  const handleOrder = async () => {
    const request = formatOrderForSubmission(order);
    const response = await postNewOrder(request, token as string);

    if (response.eta) {
      setLastOrder(response.orderNr);
      clearStore();
      navigate('/status');
    }
  };

  return (
    <>
      <div className={`fog ${open}`} />
      <CartButton onClick={handleOpen} />
      <div className={`shoppingcart ${open}`}>
        <div className="cart-container">
          <h1 className="cart__header">Din beställning</h1>
          <div className="cart__details">
            <div className="cart__list">
              {Object.values(order).length ? (
                Object.values(order).map((bean, index) => (
                  <CartItem {...bean} key={index} />
                ))
              ) : (
                <h2 className="cart__details--wops">Wops, här var det tomt.</h2>
              )}
            </div>
            <div key={'total'} className="cart__details--total">
              <div className="cart__details--row heading">
                <h2>Total</h2>
                <Dots />
                <h2 className="price">{`${totalPrice} kr`}</h2>
              </div>
              <div className="cart__details--row info">
                <p>ink moms + drönarleverans</p>
              </div>
            </div>
          </div>
          <button onClick={handleOrder} className="cart__details--button">
            Take my money!
          </button>
        </div>
      </div>
    </>
  );
};
export default CartView;
