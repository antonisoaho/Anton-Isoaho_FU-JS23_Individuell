import LoadingDrone from '../icons/LoadingDrone';

interface OrderStatusProps {
  eta: number;
  orderNr: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ eta, orderNr }) => {
  return (
    <div className="orderstatus__container">
      <div className="orderstatus__row">
        <p className="orderstatus--ordernumber">Ordernummer</p>
        <p className="orderstatus--ordernumber bold">{orderNr}</p>
      </div>
      <div className="dronecontainer">
        <LoadingDrone />
      </div>
      <h2 className="orderstatus--header">
        {eta > 1
          ? 'Din beställning är på väg!'
          : 'Din beställning ska ha anlänt!'}
      </h2>
      <div className="orderstatus__row">
        <p className="orderstatus--eta">{eta}</p>
        <p className="orderstatus--eta bold">{eta > 1 ? 'minuter' : 'minut'}</p>
      </div>
    </div>
  );
};
export default OrderStatus;
