import './cart.scss';
import { useState } from 'react';
import CartButton from '../button/CartButton';
import { useBeanStore } from '../../../store/BeanStore';
import { postNewOrder } from '../../../api/beans/beanCalls';
import useUserStore from '../../../store/UserStore';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
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
    let response;
    if (token) {
      response = await postNewOrder(request, token as string);
    } else {
      response = await postNewOrder(request);
    }

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
            <ul className="cart__list">
              {Object.values(order).map((bean, index) => (
                <div key={index}>
                  <span>{bean.name}</span>
                  <span>{bean.quantity}</span>
                </div>
              ))}
            </ul>
            <div key={'total'}>{`${totalPrice} kr`}</div>
          </div>
          <button onClick={handleOrder}>submit</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
