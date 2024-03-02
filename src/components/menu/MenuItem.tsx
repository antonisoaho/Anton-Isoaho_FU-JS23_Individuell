import { BeanModel } from '../../api/beans/models/BeanModel';
import CircularButton from '../buttons/circular/CircularButton';
import Dots from '../dots/Dots';
import AddIcon from '../icons/AddIcon';
import './menu.scss';
import { useBeanStore } from '../../store/BeanStore';

type MenuItemProps = BeanModel;

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  title: name,
  desc,
  price,
}) => {
  const { addToCart } = useBeanStore();

  return (
    <div key={id} className="item">
      <CircularButton
        onClick={() => addToCart({ name, price })}
        color="base"
        size="sm">
        <AddIcon />
      </CircularButton>
      <div className="item__info">
        <h2 className="info--title">
          <span>{name}</span>
          <Dots />
          <span className="info--price">{`${price} kr`}</span>
        </h2>
        <p className="info--desc">{desc}</p>
      </div>
    </div>
  );
};
export default MenuItem;
