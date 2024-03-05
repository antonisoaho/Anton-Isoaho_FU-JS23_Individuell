import { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import './order.scss';
import useUserStore from '../../../store/UserStore';
import { getOrderHistory } from '../../../api/user/userCalls';
import Spinner from '../../icons/Spinner';

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
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getOrders = async () => {
      const response = await getOrderHistory(token as string);
      if (response.success) {
        setOrders(response.orderHistory);
        setTitle('Orderhistorik');

        const total = response.orderHistory.reduce(
          (accumulator, order) => accumulator + order.total,
          0
        );

        setTotalSpent(total);
      } else {
        setTitle('Inga orders funna på inloggning.');
      }
      setIsLoading(false);
    };

    if (token) getOrders();
  }, []);

  return (
    <div className="order__list">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="order__header">{title}</h2>
          {orders && (
            <>
              {orders.map((order) => (
                <OrderItem {...order} key={order.orderNr} />
              ))}
              <div className="order__list--total">
                {totalSpent > 0 ? (
                  <>
                    <h2 className="total--spent">Totalt spenderat</h2>
                    <p className="total--spent">{totalSpent + ' kr'}</p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default OrderList;
