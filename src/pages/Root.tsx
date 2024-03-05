import { Outlet } from 'react-router-dom';
import Header from '../components/root/header/Header';
import Nav from '../components/root/nav/Nav';
import './pages.scss';

const Root = () => {
  return (
    <>
      <div className="rootpage">
        <Header />
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Root;
