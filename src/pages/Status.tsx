import { useEffect, useState } from 'react';
import { useBeanStore } from '../store/BeanStore';
import './pages.scss';
import useUserStore from '../store/UserStore';
import { getOrderEta, getOrderEtaNoToken } from '../api/beans/beanCalls';
import OrderStatus from '../components/status/OrderStatus';

interface OrderModel {
  eta: number;
  orderNr: string;
}

const Status = () => {
  const { lastOrder } = useBeanStore();
  const {
    validToken,
    user: { token },
  } = useUserStore();
  const [order, setOrder] = useState<OrderModel>();

  useEffect(() => {
    const getCurrOrder = async () => {
      if (validToken) {
        const response = await getOrderEta(lastOrder, token as string);
        if (response.eta) {
          setOrder({ eta: response.eta, orderNr: lastOrder });
        }
      } else {
        const response = await getOrderEtaNoToken(lastOrder);
        if (response.eta) {
          setOrder({ eta: response.eta, orderNr: lastOrder });
        }
      }
    };

    if (lastOrder) getCurrOrder();
  }, []);

  return (
    <div className="statuspage">
      {order ? <OrderStatus {...order!} /> : <div></div>}
    </div>
  );
};
export default Status;
