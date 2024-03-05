import { useBeanStore } from '../../../store/BeanStore';
import Dots from '../../common/dots/Dots';
import ChevronDown from '../../icons/ChevronDown';
import ChevronUp from '../../icons/ChevronUp';
import './cart.scss';

interface MenuItemProps {
  name: string;
  price: number;
  quantity: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, quantity }) => {
  const { addToCart, removeFromCart } = useBeanStore();

  return (
    <div className="cartitem__info">
      <div className="cartitem__info--row heading">
        <h2 className="cartitem__info--row name">{name}</h2>
        <Dots />
      </div>
      <div className="cartitem__info--row subrow">
        <p className="cartitem__info--row price">{price * quantity + ' kr'}</p>
      </div>
      <section className="cartitem__info--side adjust">
        <button
          className="cartitem__info--side chevronbutton"
          onClick={() => addToCart({ name, price })}>
          <ChevronUp />
        </button>
        {quantity}
        <button
          className="cartitem__info--side chevronbutton"
          onClick={() => removeFromCart(name)}>
          <ChevronDown />
        </button>
      </section>
    </div>
  );
};
export default MenuItem;
