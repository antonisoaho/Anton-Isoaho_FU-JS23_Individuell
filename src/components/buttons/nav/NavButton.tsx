import { useState } from 'react';
import './navbutton.scss';

const NavButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((open) => !open);
  };
  return (
    <div onClick={handleOpen} className={`hamburger ${open && 'open'}`}>
      <div className="icon"></div>
    </div>
  );
};
export default NavButton;
