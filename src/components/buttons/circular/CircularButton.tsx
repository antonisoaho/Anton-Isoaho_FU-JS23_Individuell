import './circularButton.scss';

interface CircularButtonProps {
  children: JSX.Element;
  handleClick: () => void;
  color: string;
  size: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  children,
  handleClick,
  color,
  size,
}) => {
  return (
    <button className={`circularButton ${color} ${size}`} onClick={handleClick}>
      {children}
    </button>
  );
};
export default CircularButton;
