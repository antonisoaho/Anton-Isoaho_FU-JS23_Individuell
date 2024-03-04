import { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import './order.scss';
import useUserStore from '../../store/UserStore';
import { getOrderHistory } from '../../api/user/userCalls';

interface OrderModel {
  total: number;
  orderNr: string;
  orderDate: string;
}

const OrderList = () => {
  const {
    user: { token },
  } = useUserStore();
  const [orders, setOrders] = useState<Array<OrderModel>>([]);
  const [title, setTitle] = useState<string>('Orderhistorik');

  useEffect(() => {
    const getOrders = async () => {
      const response = await getOrderHistory(token as string);
      console.log('response', response);
      if (response.success) {
        setOrders(response.orderHistory);
        setTitle('Orderhistorik');
      } else {
        setTitle('Inga orders funna på inloggning.');
      }
    };

    if (token) getOrders();
  }, []);

  return (
    <div className="order__list">
      <h2 className="order__header">{title}</h2>
      {orders && (
        <>
          {orders.map((order) => (
            <OrderItem {...order} key={order.orderNr} />
          ))}
          <div className="order__list--total">
            <h2 className="total--spent">Totalt spenderat</h2>
            <p className="total--spent">443 kr</p>
          </div>
        </>
      )}
    </div>
  );
};
export default OrderList;
