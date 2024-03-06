import { useState, useEffect } from 'react';
import { getOrderEta } from '../../api/beans/beanCalls';
import { useBeanStore } from '../../store/BeanStore';
import OrderStatus from './order/OrderStatus';
import NoOrderStatus from './order/NoOrderStatus';
import Spinner from '../icons/Spinner';
import useUserStore from '../../store/UserStore';

interface OrderModel {
  eta: number;
  orderNr: string;
}

const StatusView = () => {
  const { lastOrder } = useBeanStore();
  const {
    user: { token },
  } = useUserStore();
  const [order, setOrder] = useState<OrderModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCurrOrder = async () => {
      const userToken: string | undefined = token ? token : undefined;

      const response = await getOrderEta(lastOrder, userToken);
      if (response.eta) {
        setOrder({ eta: response.eta, orderNr: lastOrder });
      } else {
        const responseWithoutToken = await getOrderEta(lastOrder);
        if (responseWithoutToken.eta) {
          setOrder({ eta: responseWithoutToken.eta, orderNr: lastOrder });
        }
      }
      setIsLoading(false);
    };

    if (lastOrder) {
      getCurrOrder();
    } else {
      setIsLoading(false);
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
