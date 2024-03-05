import { useState, useEffect } from 'react';
import { getOrderEta } from '../../api/beans/beanCalls';
import { useBeanStore } from '../../store/BeanStore';
import OrderStatus from './order/OrderStatus';
import NoOrderStatus from './order/NoOrderStatus';
import Spinner from '../icons/Spinner';

interface OrderModel {
  eta: number;
  orderNr: string;
}

const StatusView = () => {
  const { lastOrder } = useBeanStore();
  const [order, setOrder] = useState<OrderModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCurrOrder = async () => {
      const response = await getOrderEta(lastOrder);
      if (response.eta) setOrder({ eta: response.eta, orderNr: lastOrder });
    };

    if (lastOrder) {
      getCurrOrder();
    } else {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, []);

  return (
    <div className="statuspage">
      {isLoading ? (
        <Spinner />
      ) : order ? (
        <OrderStatus {...order} />
      ) : lastOrder ? (
        <OrderStatus eta={0} orderNr={lastOrder} />
      ) : (
        <NoOrderStatus />
      )}
    </div>
  );
};
export default StatusView;
