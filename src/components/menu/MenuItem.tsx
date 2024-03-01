import { BeanModel } from '../../api/beans/models/BeanModel';
import './menu.scss';
type MenuItemProps = BeanModel;

const MenuItem: React.FC<MenuItemProps> = ({ id, title, desc, price }) => {
  return (
    <div key={id} className="item">
      <button className="item__addbutton">
        <span className="vector">+</span>
      </button>
      <div className="item__info">
        <h2 className="info--title">
          <span>{title}</span>
          <span className="info--dots">.....................</span>
          <span>{`${price} kr`}</span>
        </h2>
        <p className="info--desc">{desc}</p>
      </div>
    </div>
  );
};
export default MenuItem;
