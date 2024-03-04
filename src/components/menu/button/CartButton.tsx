import { useBeanStore } from '../../../store/BeanStore';
import CartIcon from '../../icons/CartIcon';
import './cartbutton.scss';

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { totalBeans } = useBeanStore();

  return (
    <div className="btn-container">
      <button className="cartbutton" onClick={onClick}>
        <>
          <CartIcon />
          <span className={`${totalBeans < 1 ? 'hidden' : ''} cartcounter`}>
            {totalBeans}
          </span>
        </>
      </button>
    </div>
  );
};
export default CartButton;
