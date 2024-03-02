import './circularButton.scss';

interface CircularButtonProps {
  children: JSX.Element;
  onClick: () => void;
  color: string;
  size: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  children,
  onClick,
  color,
  size,
}) => {
  return (
    <button className={`circularButton ${color} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default CircularButton;
