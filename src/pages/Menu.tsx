import Footer from '../components/footer/Footer';
import MenuView from '../components/menu/MenuView';
import './pages.scss';

const Menu = () => {
  return (
    <div className="menu__page">
      <MenuView />
      <Footer />
    </div>
  );
};
export default Menu;
