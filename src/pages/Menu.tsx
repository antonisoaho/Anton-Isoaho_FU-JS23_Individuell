import Cart from '../components/menu/cart/Cart';
import Footer from '../components/footer/Footer';
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
