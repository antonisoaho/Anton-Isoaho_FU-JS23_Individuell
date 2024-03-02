import './header.scss';
import NavButton from '../buttons/nav/NavButton';
import CircularButton from '../buttons/circular/CircularButton';
import CartIcon from '../icons/CartIcon';
import { useCartStore } from '../../store/CartStore';
import { useBeanStore } from '../../store/BeanStore';

const Header = () => {
  const { cartOpen, setCartOpen } = useCartStore();
  const { totalBeans } = useBeanStore();

  return (
    <>
      <header className="header">
        <NavButton />
        <div className="cartbutton">
          <CircularButton
            onClick={() => setCartOpen(!cartOpen)}
            color="base"
            size="lg">
            <>
              <CartIcon />
              <span className={`${totalBeans < 1 ? 'hidden' : ''} cartcounter`}>
                {totalBeans}
              </span>
            </>
          </CircularButton>
        </div>
      </header>
    </>
  );
};
export default Header;
