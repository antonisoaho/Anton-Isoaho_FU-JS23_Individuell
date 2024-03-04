import { BeanModel } from '../../../api/beans/models/BeanModel';
import { useBeanStore } from '../../../store/BeanStore';
import CircularButton from '../../buttons/circular/CircularButton';
import Dots from '../../common/dots/Dots';
import AddIcon from '../../icons/AddIcon';
import ChevronDown from '../../icons/ChevronDown';
import ChevronUp from '../../icons/ChevronUp';

interface MenuItemProps {
  name: string;
  price: number;
  quantity: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, quantity }) => {
  const { addToCart, removeFromCart } = useBeanStore();

  return (
    <div className="cartitem">
      <div className="cartitem__info">
        <div className="cartitem__info--row name">
          <h2>{name}</h2>
          <Dots />
        </div>
        <div className="cartitem__info--row price">
          <p>{name}</p>
        </div>
        <section className="cartitem__info--row adjust">
          <ChevronUp />
          {quantity}
          <ChevronDown />
        </section>
      </div>
    </div>
  );
};
export default MenuItem;
