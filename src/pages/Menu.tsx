import MenuView from '../components/menu/MenuView';
import Footer from '../components/common/footer/Footer';

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
