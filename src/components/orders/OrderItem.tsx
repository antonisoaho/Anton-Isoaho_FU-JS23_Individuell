import './order.scss';

interface OrderItemProps {
  total: number;
  orderNr: string;
  orderDate: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ total, orderNr, orderDate }) => {
  return (
    <div className="order__item">
      <div className="order__item--row">
        <h2 className="order_number">{orderNr}</h2>
        <p className="order_date">{orderDate}</p>
      </div>
      <div className="order__item--row">
        <h2 className="order_sum">total ordersumma</h2>
        <p className="order_sum right">{`${total} kr`}</p>
      </div>
    </div>
  );
};
export default OrderItem;
