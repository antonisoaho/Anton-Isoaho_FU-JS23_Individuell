import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
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
