import React from 'react';
import Divider from '../common/divider/Divider';
import './nav.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavButton from './button/NavButton';

interface NavigationItem {
  path: string;
  text: string;
}

const navigationAreas: Array<NavigationItem> = [
  {
    path: '/menu',
    text: 'Meny',
  },
  {
    path: '/about',
    text: 'Vårt kaffe',
  },
  {
    path: '/profile',
    text: 'Min profil',
  },
  {
    path: '/status',
    text: 'Orderstatus',
  },
];

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen((state) => !state);
  };

  const handleLinkClick = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  const renderNavItem = ({ text, path }: NavigationItem, index: number) => (
    <React.Fragment key={index}>
      <h2 onClick={() => handleLinkClick(path)}>{text}</h2>
      {index !== navigationAreas.length - 1 && <Divider />}
    </React.Fragment>
  );

  return (
    <>
      <div className={`nav__overlay ${open}`}>
        <div className="navigation">{navigationAreas.map(renderNavItem)}</div>
      </div>
      <NavButton onClick={handleOpen} open={open} />
    </>
  );
};
export default Nav;
