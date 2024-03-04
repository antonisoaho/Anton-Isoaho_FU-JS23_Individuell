import { BeanModel } from '../../../api/beans/models/BeanModel';
import { useBeanStore } from '../../../store/BeanStore';
import CircularButton from '../../buttons/circular/CircularButton';
import Dots from '../../common/dots/Dots';
import AddIcon from '../../icons/AddIcon';

interface MenuItemProps {
  id: string;
  title: string;
  desc: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  title: name,
  desc,
  price,
}) => {
  const { addToCart, removeFromCart } = useBeanStore();

  return (
    <div key={id} className="cartitem">
      <div className="cartitem__info"></div>
    </div>
  );
};
export default MenuItem;
