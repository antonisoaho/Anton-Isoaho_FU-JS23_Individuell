import './navbutton.scss';

interface NavButtonProps {
  onClick: () => void;
  open: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ onClick, open }) => {
  return (
    <div className={`navbtn-container ${open}`}>
      <button onClick={onClick} className={`hamburger ${open && 'open'}`}>
        <div className="icon"></div>
      </button>
    </div>
  );
};
export default NavButton;
