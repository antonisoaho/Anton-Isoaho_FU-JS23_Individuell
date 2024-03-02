import CircularButton from '../buttons/circular/CircularButton';
import './header.scss';
import NavButton from '../buttons/nav/NavButton';

const Header = () => {
  return (
    <header className="header">
      <NavButton />
      <CircularButton
        handleClick={() => console.log('cart')}
        color="base"
        size="lg">
        <span>cart</span>
      </CircularButton>
    </header>
  );
};
export default Header;
