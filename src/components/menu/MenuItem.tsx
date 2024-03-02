import { BeanModel } from '../../api/beans/models/BeanModel';
import CircularButton from '../buttons/circular/CircularButton';
import Dots from '../dots/Dots';
import './menu.scss';
type MenuItemProps = BeanModel;

const MenuItem: React.FC<MenuItemProps> = ({ id, title, desc, price }) => {
  return (
    <div key={id} className="item">
      <CircularButton
        handleClick={() => console.log('id', id)}
        color="base"
        size="sm">
        <span>+</span>
      </CircularButton>
      <div className="item__info">
        <h2 className="info--title">
          <span>{title}</span>
          <Dots />
          <span className="info--price">{`${price} kr`}</span>
        </h2>
        <p className="info--desc">{desc}</p>
      </div>
    </div>
  );
};
export default MenuItem;
