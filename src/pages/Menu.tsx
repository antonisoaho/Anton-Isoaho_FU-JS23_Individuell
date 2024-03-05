import Cart from '../components/menu/cart/CartView';
import Footer from '../components/common/footer/Footer';
import MenuView from '../components/menu/MenuView';
import './pages.scss';

const Menu = () => {
  return (
    <div className="menu__page page">
      <MenuView />
      <Cart />
      <Footer />
    </div>
  );
};
export default Menu;
